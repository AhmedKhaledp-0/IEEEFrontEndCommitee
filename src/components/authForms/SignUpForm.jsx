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
      console.log("Form submitted:", submissionData);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-zinc-900 dark:text-zinc-50 p-6 rounded-lg shadow-md"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
              ${errors.name ? "border-red-500" : "border-gray-300"}`}
            placeholder="Please enter your full name"
            autoComplete="name"
            autoFocus
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
              ${errors.email ? "border-red-500" : "border-gray-300"}`}
            placeholder="Please enter your email address"
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
              ${errors.password ? "border-red-500" : "border-gray-300"}`}
            placeholder="********"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
              ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
            placeholder="********"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
