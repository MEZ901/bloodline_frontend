import {
  Hero,
  Guide,
  Benefits,
  Newsletter,
  Footer,
} from "../components/landing-page";
import { Navbar } from "../components/common";

const LandingPage = () => (
  <div>
    <div className="w-11/12 m-auto">
      <Navbar />
      <Hero />
      <Guide />
      <Benefits />
      <Newsletter />
    </div>
    <Footer />
  </div>
);

export default LandingPage;
