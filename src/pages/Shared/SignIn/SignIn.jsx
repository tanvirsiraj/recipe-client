import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";
import "./SignIn.css";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // signInUser
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        form.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Logged-in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // google signin
  const hanldeGoogleSignIn = () => {
    console.log("google");
    signInWithGoogle()
      .then((result) => {
        console.log("google signin", result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Logged-in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero relative">
      <div className="overlay m-0 p-0"></div>
      <div className="bg-img-sign-log"></div>

      <div className="mt-32 mb-16 md:mt-40 md:mb-20 mx-2 md:mx-0 z-10 ">
        <div className="text-center md:w-[400px]  mx-auto ">
          <form
            onSubmit={handleLogin}
            className="card-body  md:px-4 lg:-mt-0   bg-[#ffffff65]    shadow-lg border border-primary-color rounded-md "
          >
            <p className="text-black text-xl md:text-3xl font-semibold mb-4 md:mb-0 ">
              Please Sign in
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base md:text-lg ">
                  Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Your Email..."
                className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2 outline-none placeholder:text-black  text-black font-semibold "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-base md:text-lg text-black font-semibold">
                  Password:
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Type Your Password..."
                className="bg-transparent border-b-2 outline-none border-b-[#302f2f4f] p-2 placeholder:text-black  text-black font-semibold"
                required
              />
            </div>
            {error ? <p className="text-red-600  bg-white p-1">{error}</p> : ""}
            <div className="form-control mt-6">
              <button className="btn bg-transparent duration-300  border-black hover:bg-transparent   text-lg md:text-xl capitalize  text-black font-bold">
                Sign in
              </button>
            </div>

            <p className="text-lg text-black my-4 font-semibold">
              Or Sign in with
            </p>
            <button
              onClick={hanldeGoogleSignIn}
              className="btn bg-transparent  duration-300 text-black  hover:bg-transparent  border-black text-lg capitalize font-semibold"
            >
              <FcGoogle />
              <span className="text-xl text-black font-bold">Google</span>
            </button>
            <p className="text-black text-left whitespace-nowrap text-sm md:text-base mt-4 font-semibold">
              New to this website? Please{" "}
              <Link to="/signup" className="link link-primary font-bold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
