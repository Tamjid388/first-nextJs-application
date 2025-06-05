"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const signIn = async () => {
    console.log(user);
    //  login logic here

    try {
      const response = await axios.post("api/users/login", user)
      console.log(response.data);
      await Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        confirmButtonText: "Continue",
      });

      // Redirect to profile page
      router.push("/profile")

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: "Something went wrong while creating your account. Please try again.",
        confirmButtonText: "Okay",
      });
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            onClick={signIn}
            className="w-full bg-white hover:bg-blue-700 text-black font-semibold py-2 transition-colors"
          >
            Sign In
          </button>
          <p className="text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="underline text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
