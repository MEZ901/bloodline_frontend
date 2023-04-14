export const selectHospitalByCity = (state, city) => {
    if (state.hospitals?.hospitals?.data) {
        return state.hospitals.hospitals.data.filter(hospital => hospital?.city === city);
    }
    return null;
};

export const selectHospitalById = (state, id) => {
    if (state.hospitals?.hospitals?.data) {
        return state.hospitals.hospitals.data.find(hospital => hospital?.id === id);
    }
    return null;
};

export const selectAllHospitals = state => state.hospitals.hospitals;
export const getHospitalsStatus = state => state.hospitals.status;
export const getHospitalsError = state => state.hospitals.error;