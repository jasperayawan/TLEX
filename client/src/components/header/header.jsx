import { Jasper } from '../../helper/dummy_image/dummyImage'
import { MdNotifications } from 'react-icons/md'
import { BiSearchAlt2, BiMessageRounded } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import { useToast } from '@chakra-ui/react'

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
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    const toast = useToast()

  const handleLogout = async () => {
    setLoading(true);

    try {
       const response = await Axios.post('http://localhost:3872/api/auth/logout', null);
        setLoading(false);

      if(response.status === 200){

        localStorage.removeItem('user')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('token')

        Navigate('/')
        
        toast({
            title: 'Logout successfully.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top-right'
          })
      }
      // Redirect or perform other actions after successful logout
    } catch (error) {
      console.error('Logout error:', error);
      setLoading(false);
      // Handle error, show a toast message, etc.
    }
  };

    const handleLinkClick = () => {
        setToggleMenu(false);
      };
    

    return(
        <div className="sticky top-0 z-20 flex h-20 w-full items-center justify-center px-5 xs:px-[50px] xl:px-0 shadow-md bg-white">
            <nav className='mx-auto py-2 flex justify-between items-center w-full px-4 lg:px-10'>
                <div className="logo font-bold text-[30px] text-black">TLEX</div>
                <label className="w-2/6 relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BiSearchAlt2 className='text-gray-600'/>
                    </span>
                    <input className="placeholder:italic text-black placeholder:text-slate-400 block w-full border border-slate-700 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search"/>
                </label>
                <div className="flex justify-center items-center gap-x-2">
                    <BiMessageRounded className='text-black text-2xl'/>
                    <MdNotifications className='text-black text-2xl'/>
                    <Menu>
                        <MenuButton>
                            <img src={Jasper} alt="profile" className='w-[50px] h-[50px] rounded-full border-2 border-[#59A52C]'/>
                        </MenuButton>
                        <MenuList bg='black'>
                            <MenuItem bg='black'>
                                <Link
                                className="w-full text-center text-sm font-semibold hover:text-[#59A52C] text-gray-400 mb-3"
                            >
                                Profile
                            </Link>
                            </MenuItem>
                            <MenuItem bg='black'>
                            <button
                                onClick={handleLogout}
                                disabled={loading}
                                className="hover:bg-[#59A52C] hover:text-white duration-200 w-full uppercase text-gray-400 border-2 border-black font-semibold px-4 py-2.5 rounded-md text-sm" 
                                >
                            {loading ? 'Logging out...' : 'Logout'}
                            </button>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </nav>
        </div>
    )
}