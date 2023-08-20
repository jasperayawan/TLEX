import { Jasper } from "../../../helper/dummy_image/dummyImage";

export default function Features() {
  return (
    <div className="">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-2xl text-gray-600">Featured Stories</h1>
        <div className="flex flex-row gap-x-4">
          <div className="flex flex-col gap-y-2">
            <img
                src='https://th.bing.com/th/id/OIP.4WJPid_VEvKOt1_-fLeJwwHaEb?w=311&h=186&c=7&r=0&o=5&pid=1.7'
                alt=""
                className="object-cover w-[150px] h-[150px] rounded-full ring-2 ring-green-500"
            />
            <span className="text-center">Korea</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <img
                src='https://th.bing.com/th/id/OIP.VcJV0qTFGQ1Xu8fsBZgnyQHaEo?w=279&h=180&c=7&r=0&o=5&pid=1.7'
                alt=""
                className="object-cover w-[150px] h-[150px] rounded-full ring-2 ring-green-500"
            />
            <span className="text-center">Japan</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <img
                src='https://th.bing.com/th/id/OIP.PMzV9xjNZq61rC2Al-tqSgHaE8?w=297&h=198&c=7&r=0&o=5&pid=1.7'
                alt=""
                className="object-cover w-[150px] h-[150px] rounded-full ring-2 ring-green-500"
            />
            <span className="text-center">IceLand</span>
          </div>
        </div>
      </div>
    </div>
  );
}
