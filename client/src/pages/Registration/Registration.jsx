import { church } from "../../helper/dummy_image/dummyImage";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [bod, setBod] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const Navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:8080/api/user/register",
        {
          username,
          email,
          password,
          gender,
          bod,
          address,
          country,
        },
        {
          headers: {
            "X-Parse-Master-Key": "1234",
            "X-Parse-Application-Id": "123",
          },
        }
      );

      if (response.status === 200) {
        toast.success("user created successfully!");
        Navigate("/");
      }
    } catch (error) {
      toast.error("server down");
    }
  };
  return (
    <div>
      <div className=" text-white bg-gradient-to-tr from-[#040814] to-[#191d2b] flex overflow-auto">
        <div className="w-1/2 sticky top-0">
          <img src={church} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center p-20">
          <div className="flex flex-col shadow-2xl w-full mx-auto max-w-lg px-4 py-4 rounded-md">
            <div className="flex flex-col gap-y-2 mb-4">
              <h1 className="text-5xl font-bold text-[#59A52C] text-center">
                Create an Account!
              </h1>
              <span className="text-md tracking-wider text-center text-[#59A52C]">
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="username"
                    className="bg-gray-700 text-gray-500 px-4 py-2 pr-20 rounded-md"
                  />
                </div>
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
                <div className="flex flex-col gap-x-10 justify-start">
                  <label htmlFor="name" className="font-bold text-zinc-600">
                    Gender
                  </label>
                    <div className="flex gap-x-2">
                        <input
                        type="radio"
                        checked={gender === "male"}
                        onChange={() => setGender("male")}
                        className="px-4 py-2 pr-20 rounded-full"
                        />
                        <label htmlFor="name" className="font-bold text-gray-600">
                        Male
                        </label>
                        <input
                        type="radio"
                        checked={gender === "female"}
                        onChange={() => setGender("female")}
                        className="px-4 py-2 pr-20 rounded-full"
                        />
                        <label htmlFor="name" className="font-bold text-gray-600">
                        Female
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-x-10 justify-start">
                  <label htmlFor="name" className="font-bold text-zinc-600">
                    Date of Birth
                  </label>
                  <input
                    value={bod}
                    onChange={(e) => setBod(e.target.value)}
                    type="date"
                    placeholder="Date of Birth"
                    className="w-full bg-gray-700 text-gray-500 px-4 py-2 pr-20 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-x-10 justify-start">
                  <label htmlFor="name" className="font-bold text-zinc-600">
                    Address
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Address"
                    className="bg-gray-700 text-gray-500 px-4 py-2 pr-20 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-x-10 justify-start">
                  <label htmlFor="name" className="font-bold text-zinc-600">
                    Country
                  </label>
                  <select 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-gray-700 px-4 py-2 pr-20 rounded-md text-zinc-400">
                    <option value="">Select a country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="CV">Cabo Verde</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <span>
                    Already have an account?{" "}
                    <Link to="/" className="text-[#59A52C]">
                      Login now!
                    </Link>
                  </span>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    type="submit"
                    className="px-10 py-2 rounded-md bg-[#59A52C]"
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
