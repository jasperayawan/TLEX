import { Jasper } from '../../helper/dummy_image/dummyImage'
import { MdNotifications } from 'react-icons/md'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleLinkClick = () => {
        setToggleMenu(false);
      };
    

    return(
        <div className="bg-[#070d1f] sticky top-0 z-20 flex h-20 w-full items-center justify-center px-5 xs:px-[50px] xl:px-0 shadow-lg">
            <nav className='mx-auto py-2 flex justify-between items-center w-full px-4 lg:px-10'>
                <div className="logo font-bold text-[30px] text-white">TLEX</div>
                <label className="w-2/6 relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BiSearchAlt2 className='text-gray-600'/>
                    </span>
                    <input className="placeholder:italic text-white placeholder:text-slate-400 block bg-gray-800 w-full border border-slate-700 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search"/>
                </label>
                <div className="flex justify-center items-center gap-x-2">
                
                    <MdNotifications className='text-white text-2xl'/>
                    <Menu>
                        <MenuButton>
                            <img src={Jasper} alt="profile" className='w-[50px] h-[50px] rounded-full border-2 border-[#59A52C]'/>
                        </MenuButton>
                        <MenuList className='bg-zinc-50 px-2 py-4 rounded-md'>
                            <MenuItem>
                                <Link
                                className="w-full text-center text-sm font-semibold hover:text-[#59A52C] text-gray-800 mb-3"
                            >
                                Profile
                            </Link>
                            </MenuItem>
                            <MenuItem>
                            <button
                                className="hover:bg-[#59A52C] hover:text-white duration-200 w-full uppercase text-black border-2 border-black font-semibold px-4 py-2.5 rounded-md text-sm" 
                                >
                            Logout
                            </button>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </nav>
        </div>
    )
}