import React, { useState } from 'react';
import "./Home.css";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

export default function Home({sizemenu,setSizemenu}) {
  const [category,setCategory] = useState(0);
  return (
    <>
     <Sidebar sizemenu={sizemenu} setsizemenu ={setSizemenu} category={category} setcategory={setCategory}/>
    <Feed sizemenu={sizemenu} setsizemenu ={setSizemenu} category={category}/>

    </>
   
  )
}
