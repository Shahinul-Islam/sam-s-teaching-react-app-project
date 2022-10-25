import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, handleGithubSignin, handleGoogleSignin } =
    useContext(AuthContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        form.reset();
        // setMessage("Successfully Logged in!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        form.reset();
        // setMessage(
        //   error.message
        //     .split("(")[1]
        //     .split("/")[1]
        //     .split(")")[0]
        //     .split("-")
        //     .join(" ")
        // );
      });
  };
  const googleSignIn = () => {
    handleGoogleSignin()
      .then((result) => {
        // console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const gitHubSignIn = () => {
    handleGithubSignin()
      .then((result) => {
        // console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Please Sign Up!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleFormSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  name="fName"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="photoURL"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  name="confirm"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account? Please Login
                  </Link>
                </label>
              </div>
              <div className="text-left">
                {/* <p>Login with Github</p> */}
                <button
                  className="btn btn-wide btn-outline my-2 capitalize"
                  onClick={googleSignIn}
                >
                  Sign Up with Google
                </button>
                {/* {user ? navigate("/") : navigate("/login")} */}
                <button
                  className="btn btn-wide btn-outline my-2 capitalize"
                  onClick={gitHubSignIn}
                >
                  Sign Up with Github
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
