import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth";
import {
  useGetAppointmentsQuery,
  useGetBloodTypesQuery,
  useGetCitiesQuery,
} from "../../app/api";
import {
  Appointments,
  ProfileCard,
  UpdatePassword,
  UpdateProfile,
} from "../../components/profile";
import { LoadingSpinner } from "../../components/common";

const Profile = () => {
  const {
    id,
    firstName,
    lastName,
    profileImage,
    age,
    bloodType,
    city,
    cin,
    phone,
    email,
  } = useSelector(selectCurrentUser);
  const { data: cities, isLoading: isLoadingCities } = useGetCitiesQuery();
  const { data: bloodTypes, isLoading: isLoadingBloodTypes } =
    useGetBloodTypesQuery();
  const { data: appointments, isLoading: isLoadingAppointments } =
    useGetAppointmentsQuery(id);

  if (isLoadingBloodTypes || isLoadingCities || isLoadingAppointments) {
    return (
      <div className="min-h-screen">
        <LoadingSpinner open />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-around my-5 gap-5">
      <div className="flex flex-col gap-5 flex-[1]">
        <div className="bg-gray-50 shadow-md rounded">
          <ProfileCard
            firstName={firstName}
            lastName={lastName}
            profileImage={profileImage}
          />
        </div>
        <div className="bg-gray-50 shadow-md rounded">
          <Appointments
            firstName={firstName}
            lastName={lastName}
            appointments={appointments}
          />
        </div>
      </div>
      <div className="flex-[2] h-fit flex flex-col gap-5">
        <div className="bg-gray-50 shadow-md rounded">
          <UpdateProfile
            firstName={firstName}
            lastName={lastName}
            age={age}
            bloodType={bloodType}
            city={city}
            cin={cin}
            phone={phone}
            email={email}
            cities={cities}
            bloodTypes={bloodTypes}
          />
        </div>
        <div className="bg-gray-50 shadow-md rounded">
          <UpdatePassword />
        </div>
      </div>
    </div>
  );
};

export default Profile;
