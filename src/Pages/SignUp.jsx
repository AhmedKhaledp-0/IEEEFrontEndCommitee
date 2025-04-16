import React from "react";
import SignUpForm from "../components/authForms/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-center text-zinc-900 dark:text-zinc-50 mb-4">
        Create Your Account
      </h1>
      <p className="text-center text-xl font-light max-w-md text-zinc-600 dark:text-zinc-400 mb-4">
        Join our community to access exclusive resources and content with
        professionals worldwide.
      </p>

      <SignUpForm />
    </div>
  );
};

export default SignUp;
