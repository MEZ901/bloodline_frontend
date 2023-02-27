import React from 'react';
import { Navbar, Hero, Guide, Benefits, Newsletter, Footer } from './components';

const App = () => (
  <div className='bg-primary'>
    <Navbar />
    <Hero />
    <Guide />
    <Benefits />
    <Newsletter />
    <Footer />
  </div>
);

export default App