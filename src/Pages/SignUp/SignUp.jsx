import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signup from "../../assets/animation/signup.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { createUser, googleSignIn, profileUpdate } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  // Email Signup:
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // console.log(name, email, password, photo);

    // Password Error Message:
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMessage("Use at least one Uppercase in password");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setErrorMessage("Use at least one number in password");
      return;
    }

    // Create a User:
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        profileUpdate(name, photo);
        navigate("/login");
      })
      .catch((error) => setErrorMessage(error));
  };

  // Google login:
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleLoggedUser = result.user;
        console.log(googleLoggedUser);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return (
    <div className="hero min-h-screen border rounded-lg mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <Lottie animationData={signup} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              {errorMessage && (
                <div className="border border-red-400 rounded-lg w-2/3 mx-auto text text-red-600 m-2 ">
                  {errorMessage.slice(0, 9) === "Firebase:" ? (
                    errorMessage ===
                    "Firebase: Error (auth/email-already-in-use)." ? (
                      <p>Email already used</p>
                    ) : errorMessage ===
                      "Firebase: Error (auth/invalid-email)." ? (
                      <p>Email is not formatted correctly</p>
                    ) : errorMessage ===
                      "Firebase: Error (auth/too-many-requests)." ? (
                      <p>Too many attempts, try again later</p>
                    ) : (
                      <p>
                        There was an error while trying to create your account.
                        Please try again later.
                      </p>
                    )
                  ) : (
                    <p>{errorMessage}</p>
                  )}
                </div>
              )}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="my-4 text-center">
                Already Have an Account?{" "}
                <Link className="text-orange-600 font-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </form>
            <div>
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
    </div>
  );
};

export default SignUp;
