import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-primary left-0 right-0">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] fill-white">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[155px]"
          style={{ width: "calc(261% + 1.3px)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      <div className="text-center pt-32 pb-5 flex flex-col gap-3">
        <h4 className="text-2xl font-bold text-white">BloodLink</h4>
        <div className="flex gap-10 justify-center">
          <Link to="https://www.facebook.com/">
            <FacebookIcon className="text-white" />
          </Link>
          <Link to="https://www.instagram.com/">
            <InstagramIcon className="text-white" />
          </Link>
          <Link to="https://twitter.com/">
            <TwitterIcon className="text-white" />
          </Link>
        </div>
        <p className="text-sm text-white">© 2023 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
