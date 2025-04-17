import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../utils/Schemas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const SignInForm = () => {
  const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isValid },
    } = useForm({
      resolver: zodResolver(signInSchema),
      defaultValues: {
        email: "",
        password: "",
       },
          mode: "onChange",
        });
        const [showPassword, setShowPassword] = useState(false);
        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
          };
        const onSubmit = (data) => {
            try {
              console.log("Form submitted successfully!",data);
              alert("Signed in successfully!");
            } catch (error) {
              console.error("Error during signIn:", error);
            }
          };
  return (
    <div className="w-full max-w-md mx-auto  text-zinc-800 dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-6 ">

        <label htmlFor="email" className="lock text-lg font-medium mb-2">
          Email Address
        </label>
        <div className="relative mb-3">
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`block w-full px-3 py-3 rounded-lg bg-zinc-200/60 dark:bg-zinc-700/60 pr-10
        ${errors.email ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your email address"
            autoComplete="email"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8  text-gray-400 dark:text-gray-400"
          />
        </div>
        {errors.email && (
          <p className="m text-sm text-red-600">{errors.email.message}</p>
        )}

        <label htmlFor="password" className="lock text-lg font-medium mb-2">
          Password
        </label>
        <div className="relative mb-5">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className={`block w-full px-3 py-3 rounded-lg bg-zinc-200/60 dark:bg-zinc-700/60 pr-10
              ${errors.password ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute flex justify-center items-center cursor-pointer right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-400"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="m text-sm text-red-600">{errors.password.message}</p>
        )}

        <div>
          <button
            type="submit"
            disabled={
              isSubmitting ||
              !isValid ||
              Object.keys(errors).length > 0 
            }
            className="w-full py-3 px-3   rounded-xl text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
