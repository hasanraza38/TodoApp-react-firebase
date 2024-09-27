import React from "react";
import Nav from "../component/Nav";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase/firebaseConfig";
import { useRef } from "react";

function Login() {
  const passValue = useRef();
  const emailValue = useRef();
  const navigate = useNavigate()

  const loginUser = () => {
    signInWithEmailAndPassword(
      auth,
      emailValue.current.value,
      passValue.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        
        navigate("")

      })
      .catch((error) => {
        console.error(err);
      });
  };
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-[80vh]">
        <div className=" border border-zinc-300 p- rounded-2xl shadow-2xl shadow-zinc-400">
          <h1 className="text-center text-green-400 text-3xl font-bold mt-5">
            Login
          </h1>
          <div className="m-10 flex flex-col gap-8">
            <label className="input input-bordered flex items-center gap-2 w-96">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                ref={emailValue}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 w-96">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                ref={passValue}
                type="password"
                className="grow"
                placeholder="Password"
              />
            </label>
            <div className="flex flex-col justify-center">
              <button
                onClick={loginUser}
                className="btn bg-green-400 px-5 py-1 text-white hover:bg-green-500 p-0"
              >
                Login
              </button>
              <h1 className="text-center text-lg mt-1">
                Not a user ?{" "}
                <span className="text-green-600">
                  <Link to="/register">Register</Link>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
