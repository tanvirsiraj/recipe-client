import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "npm install axios",
  });
  return axiosSecure;
};

export default useAxiosSecure;
