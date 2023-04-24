import { Button } from "@mui/material";
import { Profile } from "../../assets";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useRef, useState } from "react";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth";

const ProfileCard = () => {
  const { profileImage, firstName, lastName } = useSelector(selectCurrentUser);
  const [picture, setPicture] = useState(profileImage || null);
  const profileImg = useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleProfileClick = () => {
    profileImg.current.click();
  };

  const handleRemovePicture = () => {
    setPicture(null);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        enqueueSnackbar("Image size should be less than 10MB", {
          variant: "error",
        });
        return;
      }
      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/jpg"
      ) {
        enqueueSnackbar("Image format should be JPEG or PNG or JPG", {
          variant: "error",
        });
        return;
      }
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-2">
        {firstName} {lastName}
      </h2>
      <div>
        <div
          className="mx-auto mb-4 w-36 h-36 rounded-full relative"
          style={{
            backgroundImage: `url('${picture || Profile}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span
            className={`absolute rounded-full p-1 right-0 bg-gray-100 cursor-pointer ${
              !picture && "hidden"
            }`}
            onClick={handleRemovePicture}
          >
            <DeleteOutlineIcon />
          </span>
        </div>
        <div className="flex justify-center">
          <Button
            variant="contained"
            onClick={handleProfileClick}
            style={{ backgroundColor: "#FF1C23" }}
          >
            Update Picture
          </Button>
          <input
            type="file"
            name="file"
            ref={profileImg}
            onChange={handleProfileChange}
            hidden
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
