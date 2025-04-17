import React from "react";
import SignInForm from "../components/authForms/SignInForm";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold text-center text-zinc-900 dark:text-zinc-50 mb-4">
            Sign In
          </h1>
          <p className="text-center text-xl font-light max-w-md text-zinc-600 dark:text-zinc-400 my-3 px-2 sm:px-0">
          Log in to your Space  <span className=" text-lg font-bold text-blue-500">
          — Your Community AWAITS!
  </span>
          </p>
    
          <SignInForm />
        </div>
  );
};

export default SignIn;
