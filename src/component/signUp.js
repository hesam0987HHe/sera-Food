import React, { useState } from "react";
import Logo from "../style/logo.png";
import "../style/index.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    // Check if email is already registered
    axios
      .get(`https://react-api-66b61-default-rtdb.firebaseio.com/user.json`)
      .then((response) => {
        const users = response.data;
        const isEmailRegistered = Object.values(users).some(
          (user) => user.email === email
        );

        if (isEmailRegistered) {
          setError("این ایمیل قبلاً ثبت شده است.");
          setLoading(false);

          // Show alert for 3 seconds
          setTimeout(() => {
            setError("");
          }, 30000);
        } else {
          // Register the user
          axios
            .post(
              `https://react-api-66b61-default-rtdb.firebaseio.com/user.json`,
              {
                email,
                password,
              }
            )
            .then(() => {
              // Reset form fields
              setEmail("");
              setPassword("");
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">



      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto border-4 rounded-2xl"
          src={Logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ساخت حساب کاربری
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
            </div>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            {loading ? (
              <button
                type="button"
                disabled
                className="cursor-not-allowed flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                در حال ورود...
              </button>
            ) : (
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ورود
              </button>
            )}
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          حساب دارید؟{"  "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            ورود به حساب
          </Link>
        </p>
      </div>
    </div>
  );
}
