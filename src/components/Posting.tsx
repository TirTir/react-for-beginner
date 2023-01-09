import { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface PostingProps {
  addPost : (title:string, content:string) => void
}
function Posting({addPost} : PostingProps){

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitle = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const onContent = (event: React.ChangeEvent<HTMLInputElement> ) => setContent(event.target.value);
  const navigate = useNavigate();

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if((title === "") && (content === "")){ //비어있을 경우
      return;
    }
    else { //게시판 홈으로
      addPost(title, content);
      navigate('/home')
    }
  }
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", width: "100%"}}>
          <form style={{display: "flex", flexDirection: "column", paddingLeft: "30px", height: "80%"}}>
            <input style={{display: "flex", height: "15%", width: "90%"}}
              onChange={onTitle}
              value={title}
              type="text" 
              placeholder="제목"
            />
            <input style={{display: "flex", height: "70%", width: "90%"}}
              onChange={onContent}
              value={content}
              type="text" 
              placeholder="내용"
            />
            <button style={{display: "flex", justifyContent: "center", width: "91%"}} onClick={onSubmit}>등록하기</button>
          </form>
        </div>
      );
}

export default Posting;