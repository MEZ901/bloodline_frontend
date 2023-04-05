import axios from "axios";

const registerLoader = async () => {
    const { data } = await axios.get("http://localhost:8000/api/cities");
    return data.data;
}

export default registerLoader;