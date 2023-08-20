import { Jasper } from "../../../helper/dummy_image/dummyImage";

export default function MyPost(){
    return(
        <div className="flex flex-wrap mx-auto max-w-7xl w-full gap-2">
            <div className="w-[300px] h-[300px]">
                <img src={Jasper} alt="" />
            </div>
            <div className="w-[300px] h-[300px]">
                <img src={Jasper} alt="" />
            </div>
            <div className="w-[300px] h-[300px]">
                <img src={Jasper} alt="" />
            </div>
            <div className="w-[300px] h-[300px]">
                <img src={Jasper} alt="" />
            </div>
            <div className="w-[300px] h-[300px]">
                <img src={Jasper} alt="" />
            </div>
            <div className="w-[300px] h-[300px]">
                <img src={Jasper} alt="" />
            </div>
            <div className="w-[300px] h-[300px]">
                <img src={Jasper} alt="" />
            </div>
        </div>
    )
}