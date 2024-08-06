import React, { useCallback, useEffect, useState } from 'react';
import "./Recommend.css";
import { Api_key } from '../data';
import { convert_value } from '../data';
import { Link } from 'react-router-dom';


export default function Recommend({videicategory}) {
    const[apikey,setApikey]= useState([]);

    const fetchdata = useCallback(async ()=>{
        const recommended =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${videicategory}&key=${Api_key}`;
        await fetch(recommended).then(res => res.json()).then(data => setApikey(data.items));

    },[videicategory]) 
    useEffect(()=>{
        fetchdata();
    },[videicategory,fetchdata])
  return (
    <div className='recommend'>
        {
            apikey.map((item,index)=>{
                return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}/`}  className='suggested'>
                    <img src={item.snippet.thumbnails.default.url} alt=''></img>
                    <div className='suggested-info'>
                        <h3>{item.snippet.title}</h3>
                        <p>{item.snippet.channelTitle}</p>
                        <span>{convert_value(item.statistics.viewCount)} views</span>
                    </div>
            </Link>

                )
            })
        }
       
       
       
     
    </div>
  )
}
