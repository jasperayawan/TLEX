import { Jasper } from "../../../helper/dummy_image/dummyImage"

export default function UserInfo({ user }){
    return(
        <div className="flex flex-row justify-start gap-x-5 w-1/3">
            <img src={Jasper} alt="" className="w-40 h-40 rounded-full"/>
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
            </div>
        </div>  
    )
}