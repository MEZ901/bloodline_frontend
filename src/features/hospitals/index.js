import HospitalsList from "./HospitalsList";
import HospitalDetails from "./HospitalDetails";
import hospitalsReducer from "./hospitalSlice";
import {
    selectHospitalByCity,
    selectHospitalById,
    selectAllHospitals,
    getHospitalsStatus,
    getHospitalsError
} from "./hospitalSelectors";

export {
    HospitalsList,
    HospitalDetails,
    selectHospitalByCity,
    selectHospitalById,
    hospitalsReducer,
    selectAllHospitals,
    getHospitalsStatus,
    getHospitalsError,
};