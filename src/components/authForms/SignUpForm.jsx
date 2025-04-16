import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../utils/Schemas";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    try {
      console.log("Form submitted successfully!");
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto  text-zinc-800 dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-6 ">
        <label htmlFor="name" className="block text-lg font-medium mb-2">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={`mb-2 block w-full px-3 py-3 rounded-lg bg-zinc-200/60 dark:bg-zinc-700/60
              ${errors.name ? "border-red-500" : "border-gray-300"}`}
          placeholder="Enter your full name"
          autoComplete="name"
          autoFocus
        />
        {errors.name && (
          <p className="m text-sm text-red-600">{errors.name.message}</p>
        )}

        <label htmlFor="email" className="lock text-lg font-medium mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`mb-2 block w-full px-3 py-3 rounded-lg bg-zinc-200/60 dark:bg-zinc-700/60 
              ${errors.email ? "border-red-500" : "border-gray-300"}`}
          placeholder="Enter your email address"
          autoComplete="email"
        />
        {errors.email && (
          <p className="m text-sm text-red-600">{errors.email.message}</p>
        )}

        <label htmlFor="password" className="lock text-lg font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={`mb-2 block w-full px-3 py-3 rounded-lg bg-zinc-200/60 dark:bg-zinc-700/60
              ${errors.password ? "border-red-500" : "border-gray-300"}`}
          placeholder="Create a strong password"
        />
        {errors.password && (
          <p className="m text-sm text-red-600">{errors.password.message}</p>
        )}

        <label
          htmlFor="confirmPassword"
          className="lock text-lg font-medium mb-2"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          className={`mb-2 block w-full px-3 py-3 rounded-lg bg-zinc-200/60 dark:bg-zinc-700/60 
              ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <p className="m text-sm text-red-600">
            {errors.confirmPassword.message}
          </p>
        )}
        <p className="text-md/5 text-center font-light line-he text-gray-500 mb-4">
          Password must be at least 8 characters and include a number, uppercase
          letter, and a special character.
        </p>
        <div className="flex items-center justify-between mb-4">
          <label className="flex text-gray-700 text-md items-center">
            <input
              type="checkbox"
              className="mr-2 w-5 h-5 text-blue-500 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              {...register("terms")}
            />
            I agree to the Terms and Conditions
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-3   rounded-xl text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
