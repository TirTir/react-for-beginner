import { Link, Outlet, useLocation } from "react-router-dom";

function Layout(){
    let location = useLocation();
    
    console.log(location.pathname);

    return (
        <div style={{display:"flex", flexDirection: "column",  height:"100%"}}>
            <div style={{display:"flex" , border:"5px solid black" , backgroundColor: "gray",
            justifyContent:"center", alignItems: "center", height:"40%"}}>
                <h1 style={{fontSize: "50px"}}> 게시판 </h1>
            </div>
            <div style={{display:"flex",flexDirection: "row", height:"100%"}}>
                <div style={{display:"flex", padding: "30px",fontSize: "20px", 
                 alignItems:"center", border:"5px solid black", borderTop: "0px", flexDirection:"column", width:"20%"}}>
                    <Link style={{ paddingBottom: "10px",fontWeight: location.pathname === "/home" ? "bold" : "normal" }} to={"/home"}>홈</Link>
                    <Link style={{ fontWeight: location.pathname === "/posting" ? "bold" : "normal" }} to={"/posting"}>글쓰기</Link>
                </div>
                <div style={{display:"flex", width: "100%"}}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Layout;