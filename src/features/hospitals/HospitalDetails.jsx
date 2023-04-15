import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectHospitalById } from "./hospitalSelectors";
import { DefaultHospital, ScheduleAppointment } from "../../assets";
import { Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { ResponsibleCard } from "../../components/hospital-details";

const HospitalDetails = () => {
  const { id } = useParams();
  const hospital = useSelector((state) =>
    selectHospitalById(state, Number(id))
  );
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

  const GeographicCoordinate = "!1m18!1m12!1m3!1d15371.38079613829!2d-8.523328005249686!3d32.244553358684065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaefdd4fcbbdbc1%3A0x846cbd9f328a7bdb!2sYoucode!5e0!3m2!1sen!2sma!4v1681518410236!5m2!1sen!2sma"

  return (
    <div className="w-11/12 m-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between my-3">
        <h3 className="text-3xl font-bold">{hospital.name}</h3>
        <Chip icon={<LocationOnIcon />} label={hospital.city} />
      </div>
      <div className="my-5">
        <div className="text-lg text-gray-600">
          <iframe
            src={`https://www.google.com/maps/embed?pb=${GeographicCoordinate}`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
            defaultValue={dayjs(new Date())}
            label="Date & Time"
          />
          <img
            src={ScheduleAppointment}
            width="50%"
            alt="schedule"
            className="hidden md:flex"
          />
        </div>
        <div className="my-10">
          <ResponsibleCard />
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
