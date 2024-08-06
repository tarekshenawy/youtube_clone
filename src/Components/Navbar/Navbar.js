import React from 'react';
import "./Navbar.css";
import menuicon from "../Images/menu.png";
import logo from "../Images/logo.png";
import search from "../Images/search.png";
import upload from "../Images/upload.png";
import more from "../Images/more.png";
import notification from "../Images/notification.png";
import profile_img from "../Images/profile.png";
import { Link } from 'react-router-dom';

export default function Navbar({sizemenu, setsizemenu}) {

  return (
    <nav>
        <div className='nav-left'>
            <img src={menuicon} alt='' width="30px" className='menuicon' onClick={()=>setsizemenu(!sizemenu)}></img>
           <Link to={"/"}><img src={logo} alt='' width="100px"></img></Link> 

        </div>
        <div className='nav-middle'>
            <input type='text' placeholder='Search'></input>
            <img src={search} alt=''></img>

        </div>
        <div className='nav-right'>
            <img src={upload} alt=''></img>
            <img src={more} alt=''></img>
            <img src={notification} alt=''></img>
            <img src={profile_img} alt='' className='userprofile'></img>

        </div>
    </nav>
 
  )
}
