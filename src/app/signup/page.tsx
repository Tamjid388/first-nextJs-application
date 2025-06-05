"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Signup() {
  const router = useRouter();
  const [loading,setLoading]=useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
// email:tamjid@gmail.com

// password : 123456

// username:Tamjid Ahmed"
  const [buttonDisabled, setButtonDisabled] = useState(false);
useEffect(()=>{
  if(user.email.length>0 && user.password.length>0 && user.username.length>0){
    setButtonDisabled(false)
  }else{
    setButtonDisabled(true)
  }
},[user])

  const signUp = async () => {
    console.log(user);
  axios.post("")
    try {
      setLoading(true)
     const response=await axios.post("api/users/signup",user)
     console.log("signup success",response);
     router.push("/login")
      
    } catch (error) {
     Swal.fire({
  icon: "error",
  title: "Signup Failed",
  text: "Something went wrong while creating your account. Please try again.",
  confirmButtonText: "Okay",
});

      
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6  shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {loading?"Processing....":"Signup"}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
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
            onClick={signUp}
            className="w-full bg-white hover:bg-blue-700 text-black font-semibold
             py-2  transition-colors"
          >
            Sign Up
          </button>
          <p className="text-sm">
            Already have an account ?{" "}
            <Link className="underline text-blue-600" href={"/login"}>
              Sign In{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
