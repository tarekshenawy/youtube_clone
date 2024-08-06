import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

function App() {
  const [sizemenu,setSizemenu]=useState(false);
  return (
    <div>
      <Navbar sizemenu={sizemenu} setsizemenu={setSizemenu} />
      <Routes>
        <Route path="/" element={<Home sizemenu={sizemenu} setsizemenu={setSizemenu}/>}></Route> 
         <Route path="/video/:videocategory/:videoId" element={<Video/>}></Route>
      </Routes>
     
     
    </div>
  );
}

export default App;
