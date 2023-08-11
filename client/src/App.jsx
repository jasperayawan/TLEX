import Header from './components/header/header'
import { Outlet } from "react-router-dom";
import './App.css'
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className='bg-[#040814]'>
      <Header />
      <div><Toaster/></div>
      <Outlet/>
    </div>
  )
}

export default App
