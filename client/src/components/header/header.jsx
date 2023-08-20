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
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { LOGOUT_API } from '../../api/api_list';

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    const [user, setUser] = useState({})
    const toast = useToast()
    const PublicFolder = "http://localhost:3872/images/";
    const userFromState = localStorage.getItem('user')
    
  const handleLogout = async () => {
    setLoading(true);

    try {
       const response = await Axios.post(LOGOUT_API, null);
        setLoading(false);

      if(response.status === 200){

        localStorage.removeItem('user')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('token')
        localStorage.removeItem('id')

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

    return(
        <div className="sticky top-0 z-20 flex h-20 w-full items-center justify-center px-5 xs:px-[50px] xl:px-0 shadow-md bg-white">
            <nav className='mx-auto py-2 flex justify-between items-center w-full px-4 lg:px-10'>
                <div className="logo font-bold text-[30px] text-black">
                    <Link to='/index'>
                     TLEX
                    </Link>
                </div>
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
                            <img src={PublicFolder + user.profilePicture} alt="profile" className='w-[50px] h-[50px] rounded-full border-2 border-[#59A52C]'/>
                        </MenuButton>
                        <MenuList bg='black'>
                            <MenuItem bg='black'>
                                <Link
                                to='/profile'
                                className="w-full text-center text-sm font-semibold hover:text-[#59A52C] text-gray-400 mb-3"
                            >
                                Profile
                            </Link>
                            </MenuItem>
                            <MenuList bg='black'>
                                <Button 
                                    onClick={handleLogout}
                                    disabled={loading}
                                    colorScheme='black'>
                                    {loading ? 'Logging out...' : 'Logout'}
                                </Button>
                            </MenuList>
                        </MenuList>
                    </Menu>
                </div>
            </nav>
        </div>
    )
}