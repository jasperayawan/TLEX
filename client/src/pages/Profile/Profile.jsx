import { useEffect, useState } from "react";
import Features from "../../components/UserProfile/features/features";
import MyPost from "../../components/UserProfile/mypost/mypost";
import UserInfo from "../../components/UserProfile/userInfo/userInfo";
import Header from "../../components/header/header";
import Axios from 'axios'
import { useSelector } from "react-redux";

export default function Profile(){
    const [user, setUser] = useState([]);
    const userFromState = useSelector((data) => data.user.username)
    const [file, setFile] = useState(null)
    const [desc, setDesc] = useState('');
    const [city, setCity] = useState('');
    const [from, setFrom] = useState('');
    const [relationship, setRelationship] = useState(0)
    const [userInfo, setUserInfo] = useState({})
    const PublicFolder = "http://localhost:3872/images/";

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

    const getUser = localStorage.getItem('id')

    const updateProfile = async (e) => {
        e.preventDefault();

        const updateUser = {
            userId: getUser,
            desc: desc, 
            city: city, 
            from: from,
            relationship: relationship
          };

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('name', fileName);
            data.append('file', file);
            updateUser.profilePicture = fileName
            try{
                const res = await Axios.post(`http://localhost:3872/api/upload/`,data)
            }
            catch(error){
                console.log('cant update')
            }

        }
        try{
            const response = await Axios.put(`http://localhost:3872/api/users/${getUser}`, updateUser)
            setUserInfo(response.data)
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div className="text-black bg-white min-h-screen">
            <Header />
            <div className="flex flex-col gap-y-20 p-10">
                <div className="flex justify-between items-center">
                    <UserInfo 
                        user={user} 
                        updateProfile={updateProfile}
                        desc={desc}
                        setDesc={setDesc}
                        file={file}
                        setFile={setFile}
                        city={city}
                        setCity={setCity}
                        userInfo={userInfo}
                        from={from}
                        setFrom={setFrom}
                        PublicFolder={PublicFolder}
                        />
                    <Features />
                </div>
                <MyPost />
            </div>
        </div>
    )
}