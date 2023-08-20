import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import { SkeletonTheme } from 'react-loading-skeleton'
import Registration from '../pages/Registration/Registration'
import Login from '../pages/Login/Login'
import Forget from '../pages/Forget/forget'
import Hero from '../components/hero/hero'
import Profile from '../pages/Profile/Profile'
import { useSelector } from 'react-redux'

export default function Router(){
const user = useSelector((data) => data.user.username)

    return(
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
            <BrowserRouter>
                <Routes>
                    <Route path='/index' element={<App/>}>
                        {user 
                        ? <Route exact path='/index' element={<Hero/>}/> 
                        : <Route path='/register' element={<Registration/>}/>
                        }
                    </Route>
                    
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/register' element={<Registration/>}/>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/forget' element={<Forget/>}/>
                </Routes>
            </BrowserRouter>
        </SkeletonTheme>
    )
}