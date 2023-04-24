import {
  Appointments,
  ProfileCard,
  UpdatePassword,
  UpdateProfile,
} from "../../components/profile";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-around my-5 gap-5">
      <div className="flex flex-col gap-5 flex-[1]">
        <div className="bg-gray-50 shadow-md rounded">
          <ProfileCard />
        </div>
        <div className="bg-gray-50 shadow-md rounded">
          <Appointments />
        </div>
      </div>
      <div className="flex-[2] h-fit flex flex-col gap-5">
        <div className="bg-gray-50 shadow-md rounded">
          <UpdateProfile />
        </div>
        <div className="bg-gray-50 shadow-md rounded">
          <UpdatePassword />
        </div>
      </div>
    </div>
  );
};

export default Profile;
