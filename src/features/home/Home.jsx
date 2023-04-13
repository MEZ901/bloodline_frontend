import { Hero, HospitalCardSkeleton } from "../../components/home";
import { HospitalsList } from "../hospitals";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from "react-redux";
import { selectAllCities } from "../cities";
import { useGetHospitalsQuery } from "../../app/api";

const Home = () => {
  const cities = useSelector(selectAllCities);
  const {
    data: hospitals,
    isLoading,
    error,
  } = useGetHospitalsQuery();
  return (
    <div className="w-11/12 m-auto">
      <Hero />
      <div id="hospitals">
        <div className="w-full bg-gray-100 py-4 px-2 my-10 rounded gap-3 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Hospitals</h1>
          <Autocomplete
            disablePortal
            options={cities.data}
            getOptionLabel={(option) => option.name || ""}
            sx={{ width: '90%', maxWidth: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </div>
        <HospitalsList hospitals={hospitals?.data} isLoading={isLoading} />      
      </div>
    </div>
  )
}

export default Home