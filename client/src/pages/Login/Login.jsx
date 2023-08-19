import { church } from "../../helper/dummy_image/dummyImage";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useRef } from "react";
import { useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { login } from '../../state/reducers/user'
import { LOGIN_API } from "../../api/api_list";
export default function Login() {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const Navigate = useNavigate()
  const toast = useToast()

  const handleRegistration = async (e) => {
    e.preventDefault();

    try{
       const user = {
        email: email.current.value,
        password: password.current.value,
       }

        const response = await Axios.post(LOGIN_API,user)
        
        const token = response.data.token

        if(response.status === 200){

          localStorage.setItem('token', token)
          localStorage.setItem('user', response.data.user.username)
          localStorage.setItem('email', response.data.user.email)
          dispatch(login({ username:  response.data.user.username, email: response.data.user.email}))

          Navigate('/index')
              toast({
              title: 'Login successfully!',
              description: "We've created your account for you.",
              status: 'success',
              duration: 3000,
              isClosable: true,
              position: 'top-right'
            })
        }
    }
    catch(error){
      toast({
        title: "Login Failed",
        description: "Please check your email and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
    }
  };
  return (
    <div className="min-h-screen text-white bg-[#fff] flex overflow-auto">
      <div className="mx-auto h-screen flex justify-center items-center p-20">
        <div className="flex flex-col w-full mx-auto max-w-lg px-4 py-4 rounded-md">
          <div className="flex flex-col gap-y-2 mb-4">
            <h1 className="text-5xl font-bold text-black text-center">
              Login!
            </h1>
            <span className="text-md tracking-wider text-center text-black">
              Welcome back to Christ community!
            </span>
          </div>

          <form onSubmit={handleRegistration}>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-x-10 justify-start">
                <label htmlFor="name" className="font-bold text-zinc-600">
                  Email
                </label>
                <input
                  ref={email}
                  type="text"
                  placeholder="Email"
                  className="ring-1 ring-zinc-900 text-gray-500 px-4 py-2 pr-20 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <Link to="/forget" className="text-gray-500 font-bold">
                  Forget password?
                </Link>
              </div>
              <div className="flex flex-col gap-x-10 justify-start">
                <label htmlFor="password" className="font-bold text-zinc-600">
                  Password
                </label>
                <input
                  ref={password}
                  type="password"
                  placeholder="Enter Passowrd"
                  className="ring-1 ring-zinc-900 text-gray-500 px-4 py-2 pr-20 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <span className="text-black">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#59A52C] font-bold">
                    Sign up now!
                  </Link>
                </span>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  type="submit"
                  className="px-10 py-2 rounded-md w-full bg-black"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
