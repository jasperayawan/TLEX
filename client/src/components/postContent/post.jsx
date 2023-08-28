import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import noProfile from '../../assets/no-profile.webp'
import {
  BsSendFill,
  BsArrowThroughHeart,
  BsFillArrowThroughHeartFill,
} from "react-icons/bs";
import { FaComment } from "react-icons/fa";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import {format} from 'timeago.js'
import Axios from 'axios'

import { Post, IMAGE_API } from "../../api/api_list";
import { useSelector } from "react-redux";

export default function Posts({ posts }) {
  const [isLoading, setIsLoading] = useState(true);
  const [react, setReact] = useState(posts.reacts.length);
  const [isReact, setIsReact] = useState(false);
  const [user, setUser] = useState({})
  const users = useSelector((ID) => ID.user.username)
  
  const PublicFolder = "http://localhost:3872/images/";
  const currentUserId = localStorage.getItem('id')

  useEffect(() => {
    setIsReact(posts.reacts.includes(currentUserId))
  },[currentUserId, posts.reacts])

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 2-second delay
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try{
        const response = await Axios.get(Post + `/users?userId=${posts.userId}`)
        setUser(response.data)
      }
      catch(error){
        console.log(error)
      }
    } 
    getUser();
  },[posts.userId])

  
  const reactHandler = async () => {
    try{
     Axios.put('http://localhost:3872/api/posts/'+posts._id+"/react", {
       userId: currentUserId
     })
    }
    catch(error){
      console.log(error)
    }
    setReact(isReact ? react - 1 : react + 1);
    setIsReact(!isReact);
  }

  console.log()
  return (
    <div className="text-black px-10 py-5">
      <div className="flex flex-col">
      <div className="mb-4 px-2 ring-1 ring-zinc-300 rounded-lg py-2">
            <div className="flex justify-between items-center mb-3">
              <div className="flex justify-center items-center gap-x-3">
                <Link>
                  {isLoading ? (
                    <Skeleton width={40} height={20} />
                  ) : (
                    <Link to='/profile'>
                      <img
                      src={PublicFolder + user.profilePicture}
                      alt=""
                      className="w-[40px] h-[40px] object-cover rounded-full ring-2 ring-[#59A52C]"
                      />
                    </Link>
                  )}
                </Link>
                <span className="text-black font-bold">
                  {isLoading ? (
                    <Skeleton width={100} height={20} />
                  ) : (
                    <>
                    {user.username}
                    </>
                  )}
                </span>
                {isLoading ? (
                  <Skeleton width={20} height={20} />
                ) : (
                  <MdVerified className="text-indigo-500" />
                )}
                <span className="text-gray-500">{format(posts.createdAt)}</span>
              </div>

              {isLoading ? (
                <Skeleton width={20} height={20} />
              ) : (
                <button>
                  <BsThreeDotsVertical />
                </button>
              )}
            </div>
            {isLoading ? (
              <Skeleton width="100%" height={350} className="rounded-md" />
            ) : (
              <div className="flex flex-col gap-y-2">
                <p>{posts.desc}</p>
                <img
                  src={PublicFolder + posts.img}
                  alt=""
                  className={`h-[350px] w-full rounded-md object-scale-down bg-black ${
                  posts.img ? "" : "hidden"
                }`}
              />
              </div>
            )}
            <p>{posts.quotes}</p>
            <span
              className={`${
                isLoading || !posts.from ? "text-gray-300 font-mono" : ""
              }`}
            >
              {isLoading ? <Skeleton width={100} height={20} /> : posts.from}
            </span>

            <div className="flex justify-start items-center mt-3 border-b-[1px] pb-2 border-gray-300">
              {isLoading ? (
                <Skeleton width={20} height={20} />
              ) : (
                <BsFillArrowThroughHeartFill className="text-red-500 text-2xl mr-2" />
              )}
              <div className="flex -space-x-2">
                {isLoading ? (
                  <Skeleton width={40} height={20} />
                ) : (
                  <>
                    <img
                      className="inline-block h-[20px] w-[20px] rounded-full ring-1 ring-white"
                      src={user.profilePicure || noProfile}
                      alt=""
                    />
                  </>
                )}
              </div>
              <div className="text-sm font-medium ml-2">
                {isLoading ? (
                  <Skeleton width={20} height={20} />
                ) : (
                  <a href="#" className="text-blue-500">
                    {react} {react === 1 ? 'other' : 'others'}
                  </a>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 px-10">
              {isLoading ? (
                <Skeleton width={20} height={20} />
              ) : (
                <div className="flex justify-center items-center gap-x-2">
                  <span onClick={reactHandler} className="cursor-pointer">
                      {isReact 
                      ?  <BsFillArrowThroughHeartFill className="text-red-500 text-2xl mr-2" /> 
                      : <BsArrowThroughHeart className="text-2xl text-gray-400 cursor-pointer"/>
                      }
                  </span>
                  <span className="text-zinc-500 font-mono">React</span>
                </div>
              )}
              {isLoading ? (
                <Skeleton width={20} height={20} />
              ) : (
                <FaComment className="text-2xl text-gray-400" />
              )}
              {isLoading ? (
                <Skeleton width={20} height={20} />
              ) : (
                <BsSendFill className="text-2xl text-gray-400" />
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
