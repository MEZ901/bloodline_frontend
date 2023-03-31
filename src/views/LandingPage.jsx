import { Navbar, Hero, Guide, Benefits, Newsletter, Footer } from '../components/landing-page';

const LandingPage = () => (
  <div className='w-11/12 m-auto'>
    <Navbar />
    <Hero />
    <Guide />
    <Benefits />
  </div>
);

export default LandingPage