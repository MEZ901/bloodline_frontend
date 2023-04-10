import { Signup, Navigation, Schedule } from "../assets";

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
    icon: "LocalHospitalIcon",
    linkTo: "#hospitals",
  },
  {
    id: 2,
    title: "Blood Drives",
    icon: "CampaignIcon",
    linkTo: "#blood-drives",
  },
  {
    id: 3,
    title: "Articles",
    icon: "LocalLibraryIcon",
    linkTo: "#articles",
  },
];
