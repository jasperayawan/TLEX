import { useState } from "react";
import Modals from "./openModal";
import RightAbout from "../rightContentAbout/RightAbout";
import { Jasper } from "../../helper/dummy_image/dummyImage";
import { BiPhotoAlbum } from "react-icons/bi";
import OnlineUsers from "../onlineUsers/OnlineUser";

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
} from "@chakra-ui/react";
import Feed from "../feed/feed";
import Axios from 'axios'

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [desc, setDesc] = useState('')
  const [post, setPost] = useState([]);
  const [file, setFile] = useState(null)

  const getCurrentUserId = localStorage.getItem('id')

  const postHandling = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: getCurrentUserId,
      desc: desc,
    }
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName)
      data.append('file',file)
      newPost.img = fileName;
      try{
        await Axios.post('http://localhost:3872/api/upload', data)
        window.location.reload();
      }
      catch(error){
        console.log(error)
      }
    }
    try{
      const response = Axios.post('http://localhost:3872/api/posts', newPost)
      window.location.reload();
      console.log(response.data)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row text-white">
      <OnlineUsers />
      <Modals openModal={openModal} setOpenModal={setOpenModal} />

      <div className="w-1/2 min-h-screen overflow-y-auto">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>

            <ModalFooter>
              <button
                onClick={onClose}
                className="bg-[#59A52C] text-white px-5 py-2 rounded-3xl"
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div className="px-10 py-2 pt-5">
          <form onSubmit={postHandling}>
          <div className="flex justify-between items-center py-4 px-2">
            <div className="flex flex-row justify-start items-center gap-x-5 w-full">
              <img
                src={Jasper}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Create a post..."
                  className="outline-none mb-2 text-black"
                />
                <label htmlFor="file" className="">
                  <BiPhotoAlbum className="text-black cursor-pointer" fontSize={20}/>
                  <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])}/>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-black px-7 py-2 rounded-md"
              >
                {/* bg-[#59A52C] */}
                Post
              </button>
            </div>
          </div>
          </form>
        </div>
        <Feed />
      </div>
      <RightAbout />
    </div>
  );
}
