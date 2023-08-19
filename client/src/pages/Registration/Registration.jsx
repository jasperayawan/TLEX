import { church } from "../../helper/dummy_image/dummyImage";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useRef, useState } from "react";
import { useToast } from '@chakra-ui/react'

import { REGISTER_API } from "../../api/api_list";

export default function Registration() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const Navigate = useNavigate();
  const toast = useToast()

  const handleRegistration = async (e) => {
    e.preventDefault();

    if(confirmPassword.current.value !== password.current.value){
      password.current.setCustomValidity("Password don't match!")
    } else {

      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }

      try {
        const response = await Axios.post(
          REGISTER_API, user);
  
        if (response.status === 200) {
          toast({
            title: 'Account successfully created!',
            description: "We've created your account for you.",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top-right'
          })
          Navigate("/");
        }
      } catch (error) {
        toast({
          title: "Failed creating an account!",
          description: "Please check your email and password.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        });
      }
    }

    
  };
  return (
    <div>
      <div className=" text-white bg-white flex overflow-auto">
        <div className="mx-auto h-screen flex justify-center items-center p-20">
          <div className="flex flex-col w-full mx-auto max-w-lg px-4 py-4 rounded-md">
            <div className="flex flex-col gap-y-2 mb-4">
              <h1 className="text-5xl font-bold text-black text-center">
                Create an Account!
              </h1>
              <span className="text-md tracking-wider text-center text-black">
                Welcome back to Christ community!
              </span>
            </div>

            <form onSubmit={handleRegistration}>
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-x-10 justify-start">
                  <label htmlFor="username" className="font-bold text-zinc-600">
                    username
                  </label>
                  <input
                    ref={username}
                    type="text"
                    placeholder="username"
                    required
                    className="ring-1 ring-zinc-800 text-gray-500 px-4 py-2 pr-20 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-x-10 justify-start">
                  <label htmlFor="name" className="font-bold text-zinc-600">
                    Email
                  </label>
                  <input
                    ref={email}
                    type="text"
                    placeholder="Email"
                    required
                    className="ring-1 ring-zinc-800 text-gray-500 px-4 py-2 pr-20 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-x-10 justify-start">
                  <label htmlFor="password" className="font-bold text-zinc-600">
                    Password
                  </label>
                  <input
                    ref={password}
                    minLength="6"
                    type="password"
                    placeholder="Enter Passowrd"
                    required
                    className="ring-1 ring-zinc-800 text-gray-500 px-4 py-2 pr-20 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-x-10 justify-start">
                  <label htmlFor="password" className="font-bold text-zinc-600">
                    Confirm Password
                  </label>
                  <input
                    ref={confirmPassword}
                    minLength="6"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    className="ring-1 ring-zinc-800 text-gray-500 px-4 py-2 pr-20 rounded-md"
                  />
                </div>
                <div className="flex justify-end">
                <span className="text-black">
                  Already have an account?{" "}
                  <Link to="/" className="text-[#59A52C] font-bold">
                    login!
                  </Link>
                </span>
              </div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    type="submit"
                    className="px-10 py-2 rounded-md w-full bg-black"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
