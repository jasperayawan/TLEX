import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function Router(){
    return(
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </SkeletonTheme>
    )
}