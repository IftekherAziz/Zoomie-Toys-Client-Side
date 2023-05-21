import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../assets/animation/login.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import DynamicTitle from "../../Utilities/DynamicTitle";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

   const from = location.state?.from?.pathname || "/";


  // Dynamic Title:
  DynamicTitle("Login");

  // Email Login:
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
         navigate(from, { replace: true });
        
      })
      .catch((error) => setErrorMessage(error));
  };

  // Google login:
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleLoggedUser = result.user;
        console.log(googleLoggedUser);
       navigate(navigate(from, { replace: true }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen border rounded-lg mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <Lottie animationData={login} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              {errorMessage && (
                <div className="border border-blue-600 rounded-lg w-2/3 mx-auto text text-red-600 m-2 ">
                  {!errorMessage ? (
                    ""
                  ) : errorMessage ===
                    "Firebase: Error (auth/wrong-password)." ? (
                    <p>Wrong password. Please try again.</p>
                  ) : errorMessage ===
                    "Firebase: Error (auth/user-not-found)." ? (
                    <p>
                      User not found. Please check your email and try again.
                    </p>
                  ) : (
                    <p>An error occurred. Please try again later</p>
                  )}
                </div>
              )}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="my-4 text-center">
                New to Zoomie Toys?{" "}
                <Link className="text-orange-600 font-bold" to="/signup">
                  Sign Up
                </Link>{" "}
              </p>
            </form>
            <div className="divider">OR</div>
            <div className="mt-2">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-block gap-2"
              >
                Sign In with Google<FaGoogle className="text-xl"></FaGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
