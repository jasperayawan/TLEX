import { Jasper } from '../../helper/dummy_image/dummyImage'
import { MdNotifications } from 'react-icons/md'

export default function Header(){
    return(
        <div className="bg-[#070d1f] sticky top-0 z-20 flex h-20 w-full items-center justify-center px-5 xs:px-[50px] xl:px-0 shadow-lg">
            <nav className='mx-auto py-2 flex justify-between items-center w-full px-4 lg:px-10'>
                <div className="logo font-bold text-[30px] text-white">TLEX</div>
                <div className="flex justify-center items-center gap-x-2">
                    <div className="relative">
                        <input type="search" className='rounded-md py-2 px-4 outline-none' placeholder='search...'/>
                    </div>
                    <MdNotifications className='text-white text-2xl'/>
                    <img src={Jasper} alt="profile" className='w-[50px] h-[50px] rounded-full border-2 border-[#59A52C]'/>
                </div>
            </nav>
        </div>
    )
}