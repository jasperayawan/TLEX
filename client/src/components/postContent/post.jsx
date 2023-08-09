import { SomeData } from '../../helper/dummy_data/someData'
import { Link } from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import { BsSendFill, BsArrowThroughHeart } from 'react-icons/bs'

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
                    
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex justify-center items-center gap-x-2">
                                <BsArrowThroughHeart className='text-2xl'/>
                                <span className='text-zinc-500 font-mono'>React</span>
                            </div>
                            <BsSendFill className='text-2xl'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}