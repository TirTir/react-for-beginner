import {useParams} from "react-router-dom"

import {Post} from '../App'

interface PostScreenProps {
  posts : Post[]
}
function PostScreen({posts} : PostScreenProps){
  let { id } = useParams();
  const post = posts.find((post) => {
    return post.postnum === Number(id);
  })

  if(!post) {
    return <h1 style={{display: "flex", justifyContent: "center", width: "100%"}}>NO FOUND POST</h1>
  }

  return (
    <div style={{padding: "30px", width: "100%"}}>
      <div style={{display: "flex", flexDirection: "column", paddingLeft: "20px", border: "1px solid black", width: "80%", height: "80%"}}>
        <h2 style={{height: "10px"}}>Title : {post.title}</h2>
        <p style={{fontSize: "20px"}}>Content : {post.content}</p>
      </div>
    </div>
  )
};

export default PostScreen;