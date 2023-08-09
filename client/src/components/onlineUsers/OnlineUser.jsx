import { SomeData } from "../../helper/dummy_data/someData"
import { MdVerified } from 'react-icons/md'

export default function OnlineUsers(){
    const isUserOnline = true;
    
    return(
        <div className="w-1/5 flex-grow sticky top-20 flex h-full items-center justify-center px-5 xs:px-[50px] xl:px-0 bg-[#070d1f] mt-5 py-5">
            <ul role="list" class="p-6 divide-y divide-slate-800 w-full">
                {SomeData.map((person) => (
                    <li key={person.id} class="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                        <div className="flex">
                            <img class="h-10 w-10 rounded-full" src={person.profile} alt="" />
                            <div class="ml-3 overflow-hidden">
                                <div className="flex">
                                    <p class="text-sm font-medium text-slate-300">{person.name}</p>
                                    <MdVerified className="text-[#59A52C] ml-2"/>
                                </div>
                                <p class="text-sm text-slate-500 truncate">{person.email}</p>
                            </div>
                        </div>
                        <div className={`w-[7px] h-[6px] rounded-full ${isUserOnline ? 'bg-[#59A52C]' : 'bg-gray-600'}`}></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}