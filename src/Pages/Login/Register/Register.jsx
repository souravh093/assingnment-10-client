import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const url = form.url.value;

    if (password !== confirmPassword) {
      setError(`Password doesn't match`);
      return;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(`Please enter strong password`);
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        setSuccess("Successfully Registered");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="mb-5 text-red-500 font-semibold text-xl">{error}</p>
      <p className="mb-5 text-blue-500 font-semibold text-xl">{success}</p>
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Register</h2>
        <form onSubmit={handleRegister} className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              name="name"
              required
            />
          </div>
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
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-800">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              name="confirmPassword"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2 text-gray-800">
              Profile Image URL
            </label>
            <input
              type="text"
              id="image"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              name="url"
              required
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
