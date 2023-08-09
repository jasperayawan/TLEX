import { Jasper } from '../../helper/dummy_image/dummyImage'
import { MdVerified } from 'react-icons/md'


export default function RightAbout(){
    return(
        <div className="w-1/5 flex-grow sticky top-20 flex h-full items-center justify-center px-5 xs:px-[50px] xl:px-0 bg-[#070d1f] mt-5 py-5">
                <div className="flex flex-col justify-center items-center mt-10 gap-y-4 px-3">
                    <img src={Jasper} alt="" className='w-[200px] h-[200px] rounded-full ring-2 ring-[#59A52C]'/>
                    <h2 className='flex'>@Jasper  <MdVerified className='text-[#59A52C]'/></h2>
                    <p className='text-center text-gray-400'>
                        I am constantly exploring new technologies and frameworks to expand 
                        my skill set and stay up-to-date with the latest trends.
                    </p>
                    <h2 className="text-sm text-slate-500 truncate font-bold">Hobbies</h2>
                    <div className="flex gap-2 flex-wrap">
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            Coding
                        </span>
                        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                            Beatboxing
                        </span>
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                            Listening
                        </span>
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Badge
                        </span>
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            Badge
                        </span>
                        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                            Badge
                        </span>
                        <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                            Badge
                        </span>
                        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                            Badge
                        </span>
                    </div>
                </div>
           </div>
    )
}