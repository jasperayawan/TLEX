import { SomeData } from '../../helper/dummy_data/someData'
import { Link } from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import { BsSendFill, BsArrowThroughHeart, BsFillArrowThroughHeartFill } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'

export default function Posts(){

    return(
        <div className="text-white px-10 py-5">
            <div className="flex flex-col">
                {SomeData.map((data) => (
                    <div key={data.id} className='mb-4 px-2 bg-[#070d1f] rounded-lg py-2 shadow-lg'>
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex justify-center items-center gap-x-3">
                                <Link>
                                    <img src={data.profile} alt="" className='w-[40px] h-[40px] object-cover rounded-full ring-2 ring-[#59A52C]'/>
                                </Link>
                                <span>{data.name}</span>
                                <MdVerified className='text-[#59A52C]'/>
                            </div>
                            <button>
                                <BsThreeDotsVertical/>
                            </button>
                        </div>
                        <img src={data.image} alt="" className={`${data.image ? 'h-[350px] w-full object-cover rounded-md ' : null}`}/>
                        <p>{data.quotes}</p>
                        <span className={`${data.from ? 'text-gray-300 font-mono' : null}`}>{data.from}</span>

                        <div className='flex justify-start items-center mt-3 border-b-[1px] pb-2 border-gray-800'>
                            <BsFillArrowThroughHeartFill className='text-red-500 text-2xl mr-2'/>
                            <div class="flex -space-x-2">
                                <img className="inline-block h-[20px] w-[20px] rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                <img className="inline-block h-[20px] w-[20px] rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                <img className="inline-block h-[20px] w-[20px] rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                            </div>
                            <div class="text-sm font-medium ml-2">
                                <a href="#" className="text-blue-500">+198 others</a>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4 px-10">
                            <div className="flex justify-center items-center gap-x-2">
                                <BsArrowThroughHeart className='text-2xl text-gray-400'/>
                                <span className='text-zinc-500 font-mono'>React</span>
                            </div>
                            <FaComment className='text-2xl text-gray-400'/>
                            <BsSendFill className='text-2xl text-gray-400'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}