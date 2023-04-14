import { useRef } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { HospitalCard, HospitalCardSkeleton } from "../../components/home";
import { NoData } from "../../assets";

const HospitalsList = ({ hospitals, isLoading }) => {
  const slider = useRef(null);

  const scrollLeft = () => {
    slider.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    slider.current.scrollLeft += 200;
  };

  return (
    <div className="relative flex items-center gap-5">
      <div
        onClick={scrollLeft}
        className="opacity-50 hover:opacity-100 cursor-pointer"
      >
        <NavigateBeforeIcon />
      </div>
      <div
        ref={slider}
        className="w-full h-full flex items-start gap-2 sm:gap-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {isLoading ? (
          <HospitalCardSkeleton />
        ) : hospitals.length > 0 ? (
          hospitals?.map((hospital) => (
            <div key={hospital.id}>
              <HospitalCard hospital={hospital} />
            </div>
          ))
        ) : (
          <div className="w-80 m-auto">
            <img src={NoData} alt="no data" />
          </div>
        )}
      </div>
      <div
        onClick={scrollRight}
        className="opacity-50 hover:opacity-100 cursor-pointer"
      >
        <NavigateNextIcon />
      </div>
    </div>
  );
};

export default HospitalsList;
