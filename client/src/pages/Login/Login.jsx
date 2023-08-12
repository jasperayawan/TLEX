import { church } from "../../helper/dummy_image/dummyImage";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()
  const toast = useToast()

  const handleRegistration = async (e) => {
    e.preventDefault();

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    try{
        const response = await Axios.post('http://localhost:8080/api/user/login', 
        {email, password},
        {
            headers: {
                "X-Parse-Master-Key": "1234",
                "X-Parse-Application-Id": "123",
            }
        })

        if(response.status === 200){
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
    <div className="min-h-screen text-white bg-gradient-to-tr from-[#040814] to-[#191d2b] flex overflow-auto">
      <div className="w-1/2 sticky top-0">
        <img src={church} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="w-1/2 h-screen flex justify-center items-center p-20">
        <div className="flex flex-col shadow-2xl w-full mx-auto max-w-lg px-4 py-4 rounded-md">
          <div className="flex flex-col gap-y-2 mb-4">
            <h1 className="text-5xl font-bold text-[#59A52C] text-center">
              Login!
            </h1>
            <span className="text-md tracking-wider text-center text-[#59A52C]">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  className="bg-gray-700 text-gray-500 px-4 py-2 pr-20 rounded-md"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Passowrd"
                  className="bg-gray-700 text-gray-500 px-4 py-2 pr-20 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <span>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#59A52C]">
                    Sign up now!
                  </Link>
                </span>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  type="submit"
                  className="px-10 py-2 rounded-md bg-[#59A52C]"
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
