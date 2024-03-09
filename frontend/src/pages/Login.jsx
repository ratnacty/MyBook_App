import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const { login, logout, isLoggedIn } = useAuth(); // Include logout from useAuth
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");

  // useEffect(() => {
  //   // Mendapatkan token dari cookie saat komponen dimuat
  //   const storedToken = Cookies.get("token");
  //   setToken(storedToken);
  // }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData,
        { withCredentials: true }
      );
      const token = response.data.token;
      setToken(token);
      localStorage.setItem("token", token);
      console.log(token);

      login();
      navigate("/");
      // Store token in cookie or state as needed
      // Redirect to home page or other routes
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate("/");
  };

  return (
    <div className="w-full flex justify-center item-center mt-32">
      <div className="lg:w-5/12 max-sm:w-11/12 md:w-8/12 bg-violet-400 text-white  flex justify-center mx-auto py-4">
        <div className=" w-5/12 max-sm:w-8/12 md:w-5/12">
          <h2 className="text-2xl font-semibold mt-2 mb-4 text-center">
            Login Page
          </h2>
          {isLoggedIn ? (
            <>
              <p>You are logged in!</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-2 py-2 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 w-full">
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
                Login
              </button>

              <div className="flex justify-center gap-2">
                <p className="mb-8 mt-5">dont have any account?</p>
                <Link
                  to="/register"
                  className="text-blue-900 font-semibold hover:text-blue-950 mb-8 mt-5"
                >
                  Register
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
