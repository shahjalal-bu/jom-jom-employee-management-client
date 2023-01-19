import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://jom-jom-new-backend.vercel.app",
});

// const axios = Axios.create({
//   baseURL: "http://localhost:9000",
// });

export default axios;
