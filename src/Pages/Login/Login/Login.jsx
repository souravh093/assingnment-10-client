import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";

const Login = () => {
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleLogin = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Successfully Logged");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        setSuccess("Successfully Logged with Google");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubSignIN = () => {
    githubSignIn()
      .then((result) => {
        const githubUser = result.user;
        setSuccess("Successfully Logged with GitHub");
        navigate(from, { replace: true });
      })
      .catch();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-177px)] bg-gray-100">
      <p className="mb-5 text-red-500 font-semibold text-xl">{error}</p>
      <p className="mb-5 text-blue-500 font-semibold text-xl">{success}</p>
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Log In</h2>
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              name="password"
              required
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex flex-col w-full gap-3 mt-3">
          <button
            onClick={handleGoogleSignIn}
            className="px-4 py-2 text-white bg-red-500 rounded-lg shadow hover:bg-red-600"
          >
            Sign In with Google
          </button>
          <button
            onClick={handleGithubSignIN}
            className="px-4 py-2 text-white bg-gray-700 rounded-lg shadow hover:bg-gray-800"
          >
            Sign In with Github
          </button>
        </div>
        <p className="mt-4 text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
