import { useNavigate, useRouteError } from "react-router-dom";
import notFound from "../../assets/notFound.gif";

const NotFound = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center  relative mt-0">
      <img className="w-60 h-60 md:w-80 md:h-80" src={notFound} />
      <h2 className="text-5xl mb-2">404</h2>
      <p className="text-red-600 text-center ">{error.error?.message}</p>
      <button
        onClick={handleBackToHome}
        className="btn mt-8 bg-primary-color text-white duration-500 border-none hover:bg-black hover:text-white font-bold text-lg"
      >
        Back To Home
      </button>
    </div>
  );
};

export default NotFound;
