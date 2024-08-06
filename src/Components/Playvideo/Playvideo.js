import React, { useCallback, useEffect, useState } from 'react';
import "./Playvideo.css";
import like from "../Images/like.png";
import dislike from "../Images/dislike.png";
import share from "../Images/share.png";
import save from "../Images/save.png";
import { Api_key } from '../data';
import { convert_value } from '../data';
import moment from 'moment';


export default function Playvideo({videoId}) {
        const [apidata,setApidata] = useState(null);
        const [commentlist,setCommentlist]=useState([]);
        const [channeldata,setChanneldata]=useState(null);
       

        const fetchingdata =useCallback(
                async ()=>{
                        const videodetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Api_key}`;
                        await fetch(videodetails).then(res => res.json()).then(data=>setApidata(data.items[0]));
                }
                ,[videoId]) 
      

                // UC_x5XG1OV2P6uZZ5FSM9Ttw
      
        const fetchchannel =useCallback(async ()=>{
                const channeldata =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${Api_key}`;
                await fetch(channeldata).then(res => res.json()).then(data =>setChanneldata(data.items[0]));
        }
        ,[]) 

        const fetchcomment =useCallback(
                async ()=>{
                        const commentlist = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=40&videoId=${videoId}&key=${Api_key}`;
                        await fetch(commentlist).then(res=> res.json()).then(data => setCommentlist(data.items) )
        
                },[videoId])


        useEffect(()=>{
                fetchingdata();
            
        },[videoId,fetchingdata]);

        useEffect(()=>{
                fetchchannel();

        },[apidata,fetchchannel])
     
        useEffect(()=>{
                fetchcomment();
        },[fetchcomment,videoId])

      


        
  return (
    <div className='playvideo'>
       
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1?muted`} title='dd'  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2>{apidata ? apidata.snippet.title :"Title here" }</h2>
        <div className='video-info'>
                    <p className='views'>{convert_value(apidata? apidata.statistics.viewCount :"")} views &bull; {apidata ? moment(apidata.snippet.publishedAt).fromNow() :""} </p>
                    <div>
                       <span> <img src={like} alt=''></img> {apidata ?convert_value(apidata.statistics.likeCount)  : 144}</span> 
                      <span><img src={dislike} alt=''></img> </span>
                      <span><img src={share} alt=''></img> </span>
                      <span><img src={save} alt=''></img> </span>
                        
                    </div>
        </div>
    
        <hr></hr>

        <div className='publisher'>

                        <img src={channeldata ? channeldata.snippet.thumbnails.default.url :""}alt=''></img>
                        <div >
                        <h3>{apidata ? apidata.snippet.channelTitle :""}</h3>
                        <p>{channeldata ? convert_value(channeldata.statistics.subscriberCount) :""} Subscriber</p>
                        </div>
                <button>Subscribe</button>
    
        </div>
        <div className='video-description'>
        <p className='description'>{apidata ? apidata.snippet.description.slice(0,150) :""}</p>
       <hr></hr>
        <h2>{apidata ? convert_value(apidata.statistics.commentCount ): 200} comments</h2>
        {
                commentlist.map((item,index)=>{
                        return(
                                <div key={index} className='user-comment'>

                                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} className='profile' alt=''></img>
                                <div className='profile-user'>
                                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{ moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>  </h3>
                                        <p className='the-comment'>{item.snippet.topLevelComment.snippet.textDisplay.slice(0,30)}</p>
                                <div className='comment-icon'>
                                    <img src={like} alt=''></img><span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                                    <img src={dislike} alt=''></img><span>200</span>
                            </div>
                
                        </div>
                        </div>
                        )

                })
        }
             
     
        

        </div>
                                                               
                                                                
                                                            

                  
                    
                
     
      


        
     

      
                
       



    </div>
  )
}
