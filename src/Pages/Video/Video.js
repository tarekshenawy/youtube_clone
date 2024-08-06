import React from 'react';
import "./Video.css";
import Playvideo from '../../Components/Playvideo/Playvideo';
import Recommend from '../../Components/Recommended/Recommend';
import { useParams } from 'react-router';




export default function Video() {
  const {videocategory,videoId}=useParams();
  return (
    <div  className='video'>
      <Playvideo  videoId={videoId}/>
      <Recommend videicategory={videocategory} />
    
    </div>
  )
}
