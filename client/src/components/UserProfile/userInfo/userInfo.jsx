import { Jasper } from "../../../helper/dummy_image/dummyImage"
import { BsFillPencilFill } from 'react-icons/bs'

export default function UserInfo({ user, updateProfile, userInfo, desc, setDesc, file, setFile, city, setCity, from, setFrom, PublicFolder }){
    const PF = "http://localhost:3872/images/";
    return(
        <div>
                <form onSubmit={updateProfile}>
                    <div className="flex flex-row justify-start gap-x-5">
                    <div className="relative rounded-full">
                        {file ? (
                            <img src={URL.createObjectURL(file)} alt="" className="w-40 h-40 rounded-full" />
                        ) : (
                            <img src={PF + user.profilePicture} alt="" className="w-40 h-40 rounded-full" />
                        )}
                        <label htmlFor="file" className="">
                            <BsFillPencilFill className="text-black cursor-pointer absolute bottom-4 right-4" fontSize={20}/>
                            <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])}/>
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col w-full mb-4">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold">{user.username}</h1>
                                <button className="bg-black px-7 py-2 rounded-md text-white">Follow</button>
                            </div>
                            <i>{user.from}</i>
                            <span className="font-bold">Coding</span>
                            <span className="text-base">{user.desc}</span>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row">
                                <span className="mr-2 font-bold">775</span>
                                <span>Posts</span>
                            </div>
                            <div className="flex flex-row">
                                <span className="mr-2 font-bold">165k</span>
                                <span>Followers</span>
                            </div>
                            <div className="flex flex-row">
                                <span className="mr-2 font-bold">0</span>
                                <span>Following</span>
                            </div>
                        </div>
                        <button className="mt-4 px-7 py-2 text-white bg-black"
                            type="submit"
                            >update</button>
                    </div>
                    </div>
                </form>
            </div>
    )
}