import { Link } from "react-router-dom";
import { Post } from "../App";

interface HomeProps {
  posts : Post[]
}

function Home({posts} : HomeProps){
  
  return (
    <div style={{display: "flex", padding:"20px", flexDirection: "column", width: "100%"}}>
      <div style={{display: "flex", border: "1px solid black", flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: "space-around",width: "100%", flexDirection:"row"}}>
          <div style={{display: "flex", flex: "3", justifyContent: "center", borderRight: "1px solid black"}}>번호</div>
          <div style={{display: "flex", flex: "7", justifyContent: "center"}}>제목</div>
        </div>
        {posts.map((post) => (
                <div style={{display:"flex", borderTop: "1px solid black", flexDirection: "row"}}>
                  <div style={{display: "flex", flex: "3", justifyContent: "center", borderRight: "1px solid black"}}>{post.postnum}</div>
                  <div style={{display: "flex", flex: "7", justifyContent: "center"}}>
                    <Link to={`/post/${post.postnum}`}>{post.title}</Link>
                  </div>
                </div>
              ))}
      </div>
      <div style={{display: "flex", padding: "20px", justifyContent: "flex-end"}}>
        <Link to="/posting">글쓰기</Link>
      </div>
      </div>
  )
}

export default Home;