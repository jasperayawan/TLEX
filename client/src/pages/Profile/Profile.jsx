import { useEffect, useState } from "react";
import Features from "../../components/UserProfile/features/features";
import MyPost from "../../components/UserProfile/mypost/mypost";
import UserInfo from "../../components/UserProfile/userInfo/userInfo";
import Header from "../../components/header/header";
import Axios from 'axios'
import { useSelector } from "react-redux";
export default function Profile(){
    const [user, setUser] = useState({});
    const userFromState = useSelector((data) => data.user.username)
    console.log(userFromState)
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
        <div className="text-black bg-white min-h-screen">
            <Header />
            <div className="flex flex-col gap-y-20 p-10">
                <div className="flex justify-between items-center">
                    <UserInfo user={user}/>
                    <Features />
                </div>
                <MyPost />
            </div>
        </div>
    )
}