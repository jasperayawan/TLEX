import { useState } from 'react'
import Posts from '../postContent/post'
import Modal from './openModal'
import RightAbout from '../rightContentAbout/RightAbout'
import { Jasper } from '../../helper/dummy_image/dummyImage'
import { BiPhotoAlbum } from 'react-icons/bi'

export default function Hero(){
     const [openModal, setOpenModal] = useState(false)


    return(
        <div className='mx-auto max-w-[1600px] flex flex-col md:flex-row text-white'>
           <div className="w-1/5 flex-grow">
                {/* hello */}
           </div>
           <Modal 
               openModal={openModal}
               setOpenModal={setOpenModal}
               />
            
           <div className="w-1/2 min-h-screen overflow-y-auto">
                {/* <div className="h-[80px] mb-4 flex justify-center items-center">
                     <button 
                         onClick={() => setOpenModal(true)}
                         className='w-[50px] h-[50px] ring-1 ring-white rounded-full bg-slate-100 text-black text-lg font-bold'>
                     <span>+</span>
                     </button>
                </div> */}
                <div className="px-10 py-2 pt-5">
                    <div className="flex justify-between items-center bg-[#070d1f] py-4 px-2">
                        <div className="flex flex-row justify-start items-center gap-x-5">
                            <img src={Jasper} alt="" className='w-[50px] h-[50px] rounded-full'/>
                            <div className="flex flex-col">
                                <input type="text" placeholder='Create a post...' className='outline-none bg-[#070d1f] mb-2'/>
                                <BiPhotoAlbum />
                            </div>
                        </div>
                        <div>
                            <button className='bg-[#59A52C] px-5 py-2 rounded-3xl'>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
                    <Posts />
           </div>
           <RightAbout/>
        </div>
    )
}