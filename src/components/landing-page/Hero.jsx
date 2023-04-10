import { Button } from "@mui/material";
import { HeroImg } from "../../assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-evenly">
      <div className="text-center w-full lg:w-1/2 my-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          Donate <span className="text-primary">Blood</span>, Save{" "}
          <span className="text-primary">Lives</span>
        </h1>
        <p className="p-5">
          Blood donation is a simple but powerful way to save lives. By donating
          blood, you can help individuals who are battling illnesses or
          recovering from injuries. Your donation can make a significant impact
          and provide hope for those in need. Join us today in our mission to
          save lives and give the gift of life to those who need it most.
        </p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF1C23" }}
          onClick={() => navigate("/register")}
        >
          DONATE NOW
        </Button>
      </div>
      <div className="w-1/2 hidden lg:flex">
        <img src={HeroImg} alt="cover" />
      </div>
    </div>
  );
};

export default Hero;
