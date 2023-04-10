import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRef } from 'react';
import { HospitalCard } from '../../components/home';

const HospitalsList = () => {
  const hospitals = [
    { id: 1, name: 'Hospital 1' },
    { id: 2, name: 'Hospital 2' },
    // { id: 3, name: 'Hospital 3' },
    // { id: 4, name: 'Hospital 4' },
    // { id: 5, name: 'Hospital 5' },
    // { id: 6, name: 'Hospital 6' },
    // { id: 7, name: 'Hospital 7' },
    // { id: 8, name: 'Hospital 8' },
    // { id: 9, name: 'Hospital 9' },
    // { id: 10, name: 'Hospital 10' },
    // { id: 11, name: 'Hospital 11' },
    // { id: 12, name: 'Hospital 12' },
    // { id: 13, name: 'Hospital 13' },
  ];
  const slider = useRef(null);

  const scrollLeft = () => {
    slider.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    slider.current.scrollLeft += 200;
  };

  return (
    <div className="relative flex items-center gap-5">
      <div onClick={scrollLeft} className='opacity-50 hover:opacity-100 cursor-pointer'>
      <NavigateBeforeIcon />
      </div>
      <div ref={slider} className="w-full h-full flex items-start justify-center gap-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {hospitals.map((hospital) => (
          <div key={hospital.id}>
            <HospitalCard />
          </div>
        ))}
      </div>
      <div onClick={scrollRight} className='opacity-50 hover:opacity-100 cursor-pointer'>
        <NavigateNextIcon />
      </div>
    </div>
  )
}

export default HospitalsList