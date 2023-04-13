import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Hero } from "../../components/home";
import { HospitalsList, selectHospitalByCity } from "../hospitals";
import { selectAllCities } from "../cities";
import { useGetHospitalsQuery } from "../../app/api";
import { selectCurrentUser } from "../auth";

const Home = () => {
  const { data, isLoading, error } = useGetHospitalsQuery();
  const cities = useSelector(selectAllCities);
  const { city: userCity } = useSelector(selectCurrentUser);
  const [filter, setFilter] = useState(cities.data.find((option) => option.name === userCity));
  const [hospitals, setHospitals] = useState([]);
  const filteredHospitals = useSelector((state) => selectHospitalByCity(state, filter?.name));

  useEffect(() => {
    setHospitals(filter ? filteredHospitals : data?.data);
  }, [filter]);

  const handleChange = (event, value) => {
    setFilter(value);
  }

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
            sx={{ width: "90%", maxWidth: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
            value={filter}
            onChange={handleChange}
          />
        </div>
        <HospitalsList hospitals={hospitals} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
