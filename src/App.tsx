import Layout from "./Layout";
import Home from "./routes/Home";
import Post from "./components/Post";
import Posting from "./components/Posting";
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


export interface Post {
  title : string,
  postnum: number,
  content: string
}




function App(){
  const [postnum, setPostnum] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  function addPost(title : string, content: string){
    const post = {
      postnum:postnum,
      title:title,
      content:content,
    }
    setPosts([...posts,post]);
    setPostnum(postnum+1);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <Layout />,
      children:[
        {
          path: "home",
          element: <Home posts={posts} />,
        },
        {
          path: "posting",
          element: <Posting addPost={addPost}/>,
        },
        {
          path: "post/:id",
          element: <Post posts={posts} />,
        },
      ]
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
};

export default App;