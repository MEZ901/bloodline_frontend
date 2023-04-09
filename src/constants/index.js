import { Signup, Navigation, Schedule } from "../assets";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export const guideSteps = [
  {
    id: 1,
    title: "Sign up for free",
    cover: Signup,
  },
  {
    id: 2,
    title: "Discover donation centers near you",
    cover: Navigation,
  },
  {
    id: 3,
    title: "schedule an appointment",
    cover: Schedule,
  },
];

export const homePageHeroLinks = [
  {
    id: 1,
    title: "Hospitals",
    icon: <LocalHospitalIcon className="text-white" sx={{fontSize: '60px'}} />,
  },
  {
    id: 2,
    title: "Blood Drives",
    icon: <CampaignIcon className="text-white" sx={{fontSize: '60px'}} />,
  },
  {
    id: 3,
    title: "Articles",
    icon: <LocalLibraryIcon className="text-white" sx={{fontSize: '60px'}} />,
  },
];
