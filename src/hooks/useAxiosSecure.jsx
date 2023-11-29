import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "https://recipe-server-gray.vercel.app",
  });
  return axiosSecure;
};

export default useAxiosSecure;
