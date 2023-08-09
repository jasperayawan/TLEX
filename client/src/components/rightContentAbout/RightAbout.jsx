import { Jasper } from '../../helper/dummy_image/dummyImage'
import { MdVerified } from 'react-icons/md'


export default function RightAbout(){
    return(
        <div className="w-1/5 flex-grow sticky top-20 flex h-full items-center justify-center px-5 xs:px-[50px] xl:px-0 bg-[#070d1f] mt-5 py-5">
                <div className="flex flex-col justify-center items-center mt-10 gap-y-4">
                    <img src={Jasper} alt="" className='w-[200px] h-[200px] rounded-full ring-2 ring-[#59A52C]'/>
                    <h2 className='flex'>@Jasper  <MdVerified className='text-[#59A52C]'/></h2>
                    <p className='text-center text-gray-400 px-3'>
                        I am constantly exploring new technologies and frameworks to expand 
                        my skill set and stay up-to-date with the latest trends.
                    </p>
                </div>
           </div>
    )
}