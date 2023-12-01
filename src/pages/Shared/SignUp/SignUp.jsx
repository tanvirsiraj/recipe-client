import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";

const SignUp = () => {
  const { createUser, signInWithGoogle, profileUpdate, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (password.length < 6) {
      setError("Password can not be less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password doesn't have a capital letters");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setError("Password doesn't have a special characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        profileUpdate(name, photoUrl)
          .then(() => {
            logOut()
              .then(() => {
                // console.log("User Logout Successfully");
                navigate("/signin");
              })
              .catch((error) => {
                // console.log(error.message);
              });
          })
          .catch(() => {});
        form.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // console.log(error.message);
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
          title: "User created successfully",
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
        <div className="text-center md:w-[500px]  mx-auto ">
          <form
            onSubmit={handleSignUp}
            className="card-body  lg:-mt-0   bg-[#ffffff65] px-2 md:px-6   shadow-lg border border-primary-color rounded-md "
          >
            <p className="text-black text-lg md:text-3xl font-semibold mb-4 md:mb-0 ">
              Please Sign up
            </p>
            <div className="grid grid-cols-2 overflow-hidden gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base md:text-lg ">
                    Image:
                  </span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo URL..."
                  className="bg-transparent border-b-2 border-b-[#302f2f4f] px-2 py-1 outline-none placeholder:text-black  text-black font-semibold "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base md:text-lg ">
                    Name:
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name..."
                  className="bg-transparent border-b-2 border-b-[#302f2f4f] px-2 py-1 outline-none placeholder:text-black  text-black font-semibold "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base md:text-lg ">
                    Email:
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  className="bg-transparent border-b-2 border-b-[#302f2f4f] px-2 py-1 outline-none placeholder:text-black  text-black font-semibold "
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
                  placeholder="Your Password..."
                  className="bg-transparent border-b-2 outline-none border-b-[#302f2f4f] px-2 py-1 placeholder:text-black  text-black font-semibold"
                  required
                />
              </div>
            </div>
            {error ? <p className="text-red-600  bg-white p-1">{error}</p> : ""}
            <div className="form-control mt-6">
              <button className="btn bg-transparent duration-300  border-black hover:bg-transparent   text-lg md:text-xl capitalize  text-black font-bold">
                Sign Up
              </button>
            </div>

            <p className="text-lg text-black my-4 font-semibold">
              Or Sign up with
            </p>
            <button
              onClick={hanldeGoogleSignIn}
              className="btn bg-transparent  duration-300 text-black  hover:bg-transparent  border-black text-lg capitalize font-semibold"
            >
              <FcGoogle />
              <span className="text-xl text-black font-bold">Google</span>
            </button>
            <p className="text-black text-left whitespace-nowrap text-sm md:text-base mt-4 font-semibold">
              Already have an account? Please
              <Link to="/signin" className="link link-primary font-bold ms-1">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
