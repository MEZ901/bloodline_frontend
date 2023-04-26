import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import { selectHospitalById } from "./hospitalSelectors";
import { ScheduleAppointment } from "../../assets";
import { ResponsibleCard } from "../../components/hospital-details";
import { selectCurrentUser } from "../auth";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useMakeAppointmentMutation } from "../../app/api";
import { LoadingSpinner } from "../../components/common";

const HospitalDetails = () => {
  const { id } = useParams();
  const user = useSelector(selectCurrentUser);
  const { name, city, geographicCoordinate, responsible } = useSelector(
    (state) => selectHospitalById(state, Number(id))
  );
  const { enqueueSnackbar } = useSnackbar();
  const [selectedDate, setSelectedDate] = useState(null);
  const [makeAppointment, { isLoading }] = useMakeAppointmentMutation();

  const disableWeekends = (date) => {
    const day = dayjs(date).day();
    return day === 0 || day === 6;
  };

  const shouldDisableTime = (selectedDate) => {
    const disabledHours = [
      15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8,
    ];
    const hour = selectedDate.hour();
    return disabledHours.includes(hour);
  };

  const handleChange = (newValue) => {
    const dateAndTime = dayjs(newValue).format("YYYY-MM-DD HH:mm");
    setSelectedDate(dateAndTime);
  };

  const handleSubmit = async () => {
    if (!selectedDate) {
      enqueueSnackbar("Please select tha date and time", {
        variant: "error",
      });
      return;
    }
    const row = {
      date: selectedDate,
      status: "pending",
      hospital_id: Number(id),
      user_id: user.id,
    };
    try {
      await makeAppointment(row).unwrap();
      enqueueSnackbar("Appointment successfully scheduled", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(error?.data.message, {
        variant: "error",
      });
    }
  };

  return (
    <div>
      <LoadingSpinner open={isLoading} />
      <div className="flex flex-col sm:flex-row sm:justify-between my-3">
        <h3 className="text-3xl font-bold">{name}</h3>
        <Chip icon={<LocationOnIcon />} label={city} />
      </div>
      <div className="my-5">
        <div className="text-lg text-gray-600">
          <iframe
            src={`https://www.google.com/maps/embed?pb=${geographicCoordinate}`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-center text-2xl font-bold">
          Schedule an appointment
        </h3>
        <div className="flex justify-evenly">
          <StaticDateTimePicker
            ampm={false}
            disablePast
            minutesStep={30}
            shouldDisableDate={disableWeekends}
            shouldDisableTime={shouldDisableTime}
            onChange={handleChange}
            onAccept={handleSubmit}
          />
          <img
            src={ScheduleAppointment}
            width="50%"
            alt="schedule"
            className="hidden md:flex"
          />
        </div>
        <div className="my-10">
          <ResponsibleCard {...responsible} />
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
