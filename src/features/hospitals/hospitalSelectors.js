export const selectHospitalByCity = (state, city) => {
    return state.hospitals.hospitals.filter(hospital => hospital.city === city);
};

export const selectHospitalById = (state, id) => {
    return state.hospitals.hospitals.find(hospital => hospital.id === id);
};

export const selectAllHospitals = state => state.hospitals.hospitals;
export const getHospitalsStatus = state => state.hospitals.status;
export const getHospitalsError = state => state.hospitals.error;