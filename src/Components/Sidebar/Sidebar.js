import React from 'react';
import "./Sidebar.css";
import home_icon from "../Images/home.png";
import game_icon from "../Images/game_icon.png";
import automobile_icon from "../Images/automobiles.png";
import sport_icon from '../Images/sports.png';
import entertainment_icon from "../Images/entertainment.png";
import technology_icon from "../Images/tech.png";
import music_icon from "../Images/music.png";
import bolgs_icon from "../Images/blogs.png";
import news_icon from "../Images/news.png";
import jack from "../Images/jack.png";
import simon from "../Images/simon.png";
import tom from "../Images/tom.png";
import megan from "../Images/megan.png";
import cameron from "../Images/cameron.png";
export default function Sidebar({sizemenu,category,setcategory}) {
  return (
    <div className={`sidebar ${sizemenu ? "smallmenu" : ""}`}>

        <div className='sidebar-top'>
            <div className={`sidebar-icon ${category === 0 ? "active" :""}`} >
                <img src={home_icon} alt='' onClick={()=>setcategory(0)}></img>
                <p>Home</p>

            </div>
            <div className={`sidebar-icon ${category ===20 ? "active" :""}`} >
                <img src={game_icon} alt='' onClick={()=>setcategory(20)}></img>
                <p>Gaming</p>

            </div>
            <div className={`sidebar-icon ${category ===2  ? "active" :""}`} >
                <img src={automobile_icon} alt='' onClick={()=>setcategory(2)}></img>
                <p>Automobiles</p>

            </div>
            <div className={`sidebar-icon ${category === 17 ? "active" :""}`} >
                <img src={sport_icon} alt=''onClick={()=>setcategory(17)} ></img>
                <p>Sports</p>

            </div>
            <div className={`sidebar-icon ${category ===24 ? "active" :""}`} >
                <img src={entertainment_icon} alt='' onClick={()=>setcategory(24)}></img>
                <p>Entertainment</p>

            </div>
            <div className={`sidebar-icon ${category === 28 ? "active" :""}`} >
                <img src={technology_icon} alt='' onClick={()=>setcategory(28)}></img>
                <p>Technology</p>

            </div>
            <div className={`sidebar-icon ${category === 10 ? "active" :""}`} >
                <img src={music_icon} alt='' onClick={()=>setcategory(10)}></img>
                <p>Music</p>

            </div>
            <div className={`sidebar-icon ${category === 22 ? "active" :""}`} >
                <img src={bolgs_icon} alt='' onClick={()=>setcategory(22)}></img>
                <p>Blogs</p>

            </div>
            <div className={`sidebar-icon ${category === 25 ? "active" :""}`} >
                <img src={news_icon} alt='' onClick={()=>setcategory(25)}></img>
                <p>News</p>

            </div>

        </div>
        <hr></hr>
        <div className='sidebar-bottom'>
            <h4>SUBSCRIBED</h4>
            <div className='sidebar-icon'>
                <img src={simon} alt=''></img>
                <p>PewDiePie</p>

            </div>
            <div className='sidebar-icon'>
                <img src={jack} alt=''></img>
                <p>MrBeast</p>

            </div>
            <div className='sidebar-icon'>
                <img src={tom} alt=''></img>
                <p>Justin bebber</p>

            </div>
            <div className='sidebar-icon'>
                <img src={megan} alt=''></img>
                <p>5-Minut Crafts</p>

            </div>
            <div className='sidebar-icon'>
                <img src={cameron} alt=''></img>
                <p>Nas Daily</p>

            </div>

        </div>

    </div>
  )
}
