import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        formData
      );
      console.log(response.data);
      // Redirect to login page or other routes
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response.data.message);
    }
  };

  return (
    <div className="w-full flex justify-center item-center mt-16">
      <div className="lg:w-5/12 max-sm:w-11/12 md:w-8/12 bg-violet-400 text-white  flex justify-center mx-auto py-4">
        <div className=" w-5/12 max-sm:w-8/12 md:w-5/12">
          <h2 className="text-2xl font-semibold mt-2 mb-4 text-center">
            Register Page
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 w-full">
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="outline-none p-2 block text-blue-900 w-full rounded-lg"
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="outline-none p-2 block text-blue-900 w-full rounded-lg"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="outline-none p-2 block text-blue-900 w-full rounded-lg"
              />
            </label>
            <br />
            <button
              type="submit"
              className="bg-blue-900 px-2 py-2 text-white mt-4 mb-6 hover:bg-blue-950 rounded-lg"
            >
              Register
            </button>
          </form>

          <div className="flex justify-center gap-2">
            <p className="mb-8 mt-5">Already have account?</p>
            <Link
              to="/login"
              className="text-blue-900 font-semibold hover:text-blue-950 mb-8 mt-5"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
