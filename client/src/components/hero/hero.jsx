import { useEffect, useState } from "react";
import RightAbout from "../rightContentAbout/RightAbout";
import { BiPhotoAlbum } from "react-icons/bi";
import OnlineUsers from "../onlineUsers/OnlineUser";
import Feed from "../feed/feed";
import Axios from 'axios'

export default function Hero() {
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({})

  const getCurrentUserId = localStorage.getItem('id')
  const userFromState = localStorage.getItem('user')
  const PublicFolder = 'http://localhost:3872/images/';

  const token = localStorage.getItem('token')

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
        const res = await Axios.post('http://localhost:3872/api/upload', data)
        console.log(res.data)
        window.location.reload();
      }
      catch(error){
        console.log(error)
      }
    }
    
    try{
      const response = await Axios.post('http://localhost:3872/api/posts', newPost)
      console.log(response.data)
      window.location.reload();
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    const getUser = async () => {
        try{
            const response = await Axios.get(`http://localhost:3872/api/users?username=${userFromState}`)
            setUser(response.data);
        }
        catch(error){
            console.log(error)
        }
    };
    getUser();
},[])

  return (
    <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row text-white">
      <OnlineUsers user={user}/>
      <div className="w-1/2 min-h-screen overflow-y-auto">
        <div className="px-10 pt-5">
          <form onSubmit={postHandling}>
          <div className="flex justify-between gap-x-4 pt-4 px-2">
            <div className="flex flex-row justify-start gap-x-5 w-full">
              {user.profilePicture && (
                  <img
                    src={PublicFolder + user.profilePicture}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                )}
              <div className="flex flex-col gap-y-3 w-full">
                <textarea 
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  name="" 
                  id="" 
                  cols="30" 
                  className="ring-1 ring-zinc-500 rounded-md pl-2 text-black"></textarea>
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
      <RightAbout user={user}/>
    </div>
  );
}
