import { Hero } from "../../components/home";
import { HospitalsList } from "../hospitals";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Home = () => {
  const cities = [
    { id: 1, label: 'Temsia' },
    { id: 2, label: 'Tetouan' },
    { id: 3, label: 'Youssoufia' },
  ];
  return (
    <div className="w-11/12 m-auto">
      <Hero />
      <div id="hospitals">
        <div className="w-full bg-gray-100 py-4 px-2 my-10 rounded gap-3 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Hospitals</h1>
          <Autocomplete
            disablePortal
            options={cities}
            sx={{ width: '90%', maxWidth: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </div>
        <HospitalsList />
      </div>
    </div>
  )
}

export default Home