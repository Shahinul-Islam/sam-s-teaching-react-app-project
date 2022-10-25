import React from "react";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../contexts/UserContext";

const Login = () => {
  // const {} = UserContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                <label className="label">
                  <Link
                    to="/sign-up"
                    className="label-text-alt link link-hover"
                  >
                    Don't have any account? Please Sign Up
                  </Link>
                </label>
                <div className="text-left">
                  {/* <p>Login with Github</p> */}
                  <button className="btn btn-wide btn-outline my-2 capitalize">
                    Login with Google
                  </button>
                  <button className="btn btn-wide btn-outline my-2 capitalize">
                    Login with Github
                  </button>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {/* <p>{wrongPassword}</p> */}
            {/* <p>{userEmail}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
