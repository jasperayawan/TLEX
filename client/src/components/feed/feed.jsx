import { useEffect, useState } from "react"
import Axios from 'axios'
import Posts from "../postContent/post";

export default function Feed(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPost = async () => {
          try{
            const response = await Axios.get('http://localhost:3872/api/posts/timeline/getPost');
            setPosts(response.data.sort((data1, data2) => {
              return new Date(data2.createdAt) - new Date(data1.createdAt);
            }))
          }
          catch(error){
            console.log(error)
          }
        } 
        getPost();
      },[])


    return(
        <div>
            {posts.map((data) => (
                <Posts key={data._id} posts={data} />
            ))}
        </div>
    )
}