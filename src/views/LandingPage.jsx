import {
  Hero,
  Guide,
  Benefits,
  Newsletter,
  Footer,
} from "../components/landing-page";

const LandingPage = () => (
  <div>
    <div className="w-11/12 m-auto">
      <Hero />
      <Guide />
      <Benefits />
      <Newsletter />
    </div>
    <Footer />
  </div>
);

export default LandingPage;
