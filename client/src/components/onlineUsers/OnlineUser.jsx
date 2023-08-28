import { SomeData } from "../../helper/dummy_data/someData"
import { MdVerified } from 'react-icons/md'

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import Axios from 'axios';

export default function OnlineUsers({ user }){
    const [isLoading, setIsLoading] = useState(true);
    const [friends, setFriends] = useState([])
    const isUserOnline = true;
    const PublicFolder = 'http://localhost:3872/images/';

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
        setIsLoading(false);
        }, 3000); // Simulate a 2-second delay
    }, []);

    useEffect(() => {
        const getFriends = async () => {
            try{
                const response = await Axios.get(`http://localhost:3872/api/users/friends/${user._id}`)
                setFriends(response.data)
            }
            catch(error){
                console.log(error)
            }
        }

        getFriends();
    },[user._id])
    
    
    return(
        <div className="w-1/5 flex-grow sticky top-20 flex h-full items-center justify-center px-5 xs:px-[50px] xl:px-0 ring-1 ring-zinc-300 mt-5 py-5">
            <div className="px-6 py-4 flex flex-col gap-y-3 w-full">
            <h2 className="text-sm text-slate-500 truncate font-bold">friends</h2>
            <ul role="list" className="p-6 divide-y divide-slate-300">
                {friends.map((person) => (
                    <li key={person._id} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                        <div className="flex">
                            {isLoading ? (
                                <Skeleton width={20} height={20}/> 
                            ) : (
                                <img className="h-[30px] w-[30px] rounded-full" src={PublicFolder + person.profilePicture} alt="" />
                            )}
                            <div className="ml-3 overflow-hidden">
                                {isLoading ? (
                                    <Skeleton width={120} height={20} count={2}/>
                                ) : (
                                    <>
                                    <div className="flex">
                                        <p className="text-sm font-medium text-black">{person.username}</p>
                                        <MdVerified className="text-indigo-500 ml-2"/>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-800 truncate">{person.email}</p>
                                    </div>
                                    </>
                                )}
                                
                            </div>
                        </div>
                        {isLoading ? (
                            <Skeleton width={20} height={20}/>
                        ) : (
                            <div className={`w-[7px] h-[6px] rounded-full ${isUserOnline ? 'bg-[#59A52C]' : 'bg-gray-600'}`}></div>
                        )}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}