import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectHospitalById } from "./hospitalSelectors";
import { DefaultHospital } from "../../assets";
import { Chip } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HospitalDetails = () => {
  const { id } = useParams();
  const hospital = useSelector(state => selectHospitalById(state, Number(id)));

  return (
    <div className="w-11/12 m-auto">
      <div
        className="w-full h-[500px] rounded my-3"
        style={{
          backgroundImage: `url('${hospital?.image || DefaultHospital}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex justify-between">
        <h3 className="text-3xl font-bold">{hospital.name}</h3>
        <Chip icon={<LocationOnIcon />} label={hospital.city} />
      </div>
      <div className="my-5">
        <p className="text-lg">Address : <span>{hospital.address}</span></p>
        <p className="text-lg">Phone : <span>0631802520</span></p>
        <p className="text-lg">Responsible : <span>Issam MEZGUELDI</span></p>
      </div>
      <div>

      </div>
    </div>
  )
}

export default HospitalDetails