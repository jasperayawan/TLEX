import Features from "../../components/UserProfile/features/features";
import MyPost from "../../components/UserProfile/mypost/mypost";
import UserInfo from "../../components/UserProfile/userInfo/userInfo";
import Header from "../../components/header/header";

export default function Profile(){
    return(
        <div className="text-black bg-white min-h-screen">
            <Header />
            <div className="flex flex-col gap-y-20 p-10">
                <div className="flex justify-between items-center">
                    <UserInfo />
                    <Features />
                </div>
                <MyPost />
            </div>
        </div>
    )
}