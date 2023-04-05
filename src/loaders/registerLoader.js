import axios from "axios";

const registerLoader = async () => {
    const [bloodTypes, cities] = await Promise.all([
        axios.get("http://localhost:8000/api/cities"),
        axios.get("http://localhost:8000/api/blood-types")
    ]);
    return [bloodTypes.data.data, cities.data.data];
}

export default registerLoader;
