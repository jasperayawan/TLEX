import { SomeData } from "../../helper/dummy_data/someData";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import {
  BsSendFill,
  BsArrowThroughHeart,
  BsFillArrowThroughHeartFill,
} from "react-icons/bs";
import { FaComment } from "react-icons/fa";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 2-second delay
  }, []);

  return (
    <div className="text-white px-10 py-5">
      <div className="flex flex-col">
        {SomeData.map((data) => (
          <div
            key={data.id}
            className="mb-4 px-2 bg-[#070d1f] rounded-lg py-2 shadow-lg"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex justify-center items-center gap-x-3">
                <Link>
                  {isLoading ? (
                    <Skeleton width={40} height={20} />
                  ) : (
                    <img
                      src={data.profile}
                      alt=""
                      className="w-[40px] h-[40px] object-cover rounded-full ring-2 ring-[#59A52C]"
                    />
                  )}
                </Link>
                <span>
                  {isLoading ? (
                    <Skeleton width={100} height={20} />
                  ) : (
                    <>{data.name}</>
                  )}
                </span>
                {isLoading ? (
                  <Skeleton width={20} height={20} />
                ) : (
                  <MdVerified className="text-[#59A52C]" />
                )}
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
              <img
                src={data.image || ""}
                alt=""
                className={`h-[350px] w-full object-cover rounded-md ${
                  data.image ? "" : "hidden"
                }`}
              />
            )}
            <p>{data.quotes}</p>
            <span
              className={`${
                isLoading || !data.from ? "text-gray-300 font-mono" : ""
              }`}
            >
              {isLoading ? <Skeleton width={100} height={20} /> : data.from}
            </span>

            <div className="flex justify-start items-center mt-3 border-b-[1px] pb-2 border-gray-800">
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
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-[20px] w-[20px] rounded-full ring-1 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-[20px] w-[20px] rounded-full ring-1 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
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
                    +198 others
                  </a>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 px-10">
              {isLoading ? (
                <Skeleton width={20} height={20} />
              ) : (
                <div className="flex justify-center items-center gap-x-2">
                  <BsArrowThroughHeart className="text-2xl text-gray-400" />
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
        ))}
      </div>
    </div>
  );
}
