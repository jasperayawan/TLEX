import Header from './components/header/header'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className='bg-[#040814]'>
      <Header />
      <Outlet/>
    </div>
  )
}

export default App
