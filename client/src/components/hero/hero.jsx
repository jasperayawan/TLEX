import { useState } from 'react'
import Modals from './openModal'
import RightAbout from '../rightContentAbout/RightAbout'
import { Jasper } from '../../helper/dummy_image/dummyImage'
import { BiPhotoAlbum } from 'react-icons/bi'
import OnlineUsers from '../onlineUsers/OnlineUser'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import Feed from '../feed/feed'

export default function Hero(){
     const [openModal, setOpenModal] = useState(false)
     const { isOpen, onOpen, onClose } = useDisclosure()


    return(
        <div className='mx-auto max-w-[1600px] flex flex-col md:flex-row text-white'>
           <OnlineUsers />
           <Modals
               openModal={openModal}
               setOpenModal={setOpenModal}
               />
            
           <div className="w-1/2 min-h-screen overflow-y-auto">
             <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        
                    </ModalBody>

                    <ModalFooter>
                        <button 
                        onClick={onClose}
                        className='bg-[#59A52C] text-white px-5 py-2 rounded-3xl'>
                        Close
                        </button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
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
                            <button 
                                onClick={onOpen}
                                className='bg-[#59A52C] px-5 py-2 rounded-3xl'>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
                    <Feed />
           </div>
           <RightAbout/>
        </div>
    )
}