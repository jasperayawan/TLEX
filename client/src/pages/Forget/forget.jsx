import { church } from "../../helper/dummy_image/dummyImage"
import { Link } from 'react-router-dom'


export default function Forget(){

    const handleRegistration = (e) => {
        e.preventDefault();
        alert('not available')
    }
    return(
        <div className="min-h-screen text-white bg-gradient-to-tr from-[#040814] to-[#191d2b] flex overflow-auto">
            <div className="w-1/2 sticky top-0">
                <img src={church} alt="" className="object-cover h-full w-full"/>
            </div>
            <div className="w-1/2 h-screen flex justify-center items-center p-20">
                <div className="flex flex-col shadow-2xl w-full mx-auto max-w-lg px-4 py-4 rounded-md">

                    <div className="flex flex-col gap-y-2 mb-4">
                        <h1 className="text-5xl font-bold text-[#59A52C] text-center mb-4">Change your password!</h1>
                    </div>

                    <form>
                        <div className="flex flex-col gap-y-2">
                            <div className="flex flex-col gap-x-10 justify-start">
                                <label htmlFor="password" className="font-bold text-zinc-600">New Password</label>
                                <input type="password" placeholder="Enter new Password" className="bg-gray-700 text-gray-500 px-4 py-2 pr-20 rounded-md"/>
                            </div>
                            <div className="flex justify-end">
                                <Link to='/login' className="text-gray-500 font-bold">login?</Link>
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <button 
                                    onClick={handleRegistration}
                                    className="px-10 py-2 rounded-md bg-[#59A52C]">submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}