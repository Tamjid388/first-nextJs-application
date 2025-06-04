"use client"

import Link from "next/link";
import { useState } from "react";

function Signup() {
const [user,setUser]=useState({
  email:"",
  password:"",
  username:""
})




const signUp = async ()=>{
console.log(user);
}

  return  (
 <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6  shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
             onChange={(e)=>setUser({...user,email:e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            onClick={signUp}
            className="w-full bg-white hover:bg-blue-700 text-black font-semibold
             py-2  transition-colors"
          >
            Sign Up
          </button>
          <p className="text-sm">Already have an account ? <Link 
          className="underline text-blue-600"
          href={'/login'}>Sign In </Link></p>
        </div>
      </div>
    </div>

  )
   
}

export default Signup;
