import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import Logo from "../style/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
const cont = {
  hidden:{
    opacity : 0,
    x:'100vw'
  },
  visible:{
    opacity : 1,
    x:0,
    transition:{
      type:'spring',
      delay:0.2,
    }
  },
  exit:{
     x:"-100vw",
     transition:{
      ease:"easeInOut"
     }
  }
}
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setError(""); // Clear error when email changes
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        "https://react-api-66b61-default-rtdb.firebaseio.com/user.json"
      )
      .then((response) => {
        setLoading(false);
        // Assuming the response.data contains the list of users
        const users = response.data;
        const userKeys = Object.keys(users);
        const foundUser = userKeys.find(
          (key) =>
            users[key].email === email && users[key].password === password
        );
        if (foundUser) {
          // Valid credentials, redirect to app page
          console.log("Login successful");
          navigate("/app", { state: { email, password } }); // Redirect to app page
        } else {
          // Invalid credentials, display login error message
          setError("Invalid email or password. Please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  };

  return (
    <motion.div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    variants={cont}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto border-4 rounded-2xl"
          src={Logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ورود به حساب کاربری
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ایمیل
            </label>
            <div className="mt-2">
              <input
                placeholder="ایمیل"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="text-left p-3 font-sans block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-right  placeholder:font-v"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                رمز ورود{" "}
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="رمز ورود"
                value={password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="text-left p-3 font-sans block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-right placeholder:font-v"
              />
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500 block m-1"
              >
                فراموشی رمز عبور؟
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود
            </button>
          </div>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-500">{error}</p>
        )}

        <p className="mt-10 text-center text-sm text-gray-500">
          حساب ندارید؟{" "}
          <Link
            to="/SignUp"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            ساخت حساب
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
