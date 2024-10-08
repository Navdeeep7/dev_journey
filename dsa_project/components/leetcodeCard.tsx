"use client"

import axios from "axios";
import { set } from "mongoose";
import { useEffect, useState } from "react";

interface User{
    user:any
}

export function LeetcodeCard({userName}:any){
    
    const[user,setUser]=useState<User>({
        user:{}
    });
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
            try{
                axios.get("https://dev-journey-zeta.vercel.app/api/leetcodedata",{
                    headers:{
                        "userId":userName
                    }
                }).then(res=>{
                    
                    if(res.data.user.matchedUser){
                        setLoading(false);
                        setUser(res.data);
                    }
                    
                })
            }
            catch(e){
                alert(e);
            }
             // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <div>
            {loading? <div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 shadow-md p-6 animate-pulse">
  <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
  <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
  <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
  <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
  <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
</div>: <div className="bg-cardBlue-custom rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(16,16)"><path d="M10.44727,0.26563c-0.13004,0.00413 -0.25335,0.05878 -0.34375,0.15234l-4.44727,4.44922l-2.56055,2.55859c-0.05137,0.05015 -0.09134,0.11076 -0.11719,0.17773c-1.20865,1.37039 -1.19195,3.4604 0.11719,4.76953l2.56055,2.56055c1.36138,1.36138 3.58588,1.36138 4.94727,0l2.25,-2.25c0.12632,-0.12664 0.17547,-0.31106 0.12895,-0.48378c-0.04653,-0.17271 -0.18167,-0.30748 -0.35451,-0.35354c-0.17284,-0.04605 -0.35712,0.00361 -0.48342,0.13028l-2.25,2.25c-0.97862,0.97862 -2.55263,0.97862 -3.53125,0l-2.56055,-2.56055c-0.97862,-0.97862 -0.97862,-2.55459 0,-3.5332l2.56055,-2.55859c0.97862,-0.97862 2.55263,-0.97862 3.53125,0l2.25,2.25c0.19524,0.19578 0.51223,0.19622 0.70801,0.00098c0.19578,-0.19524 0.19622,-0.51223 0.00098,-0.70801l-2.25,-2.25c-0.69283,-0.69282 -1.60914,-1.02407 -2.52148,-1.01172l2.73047,-2.73047c0.14893,-0.14387 0.19378,-0.36466 0.11278,-0.55523c-0.08099,-0.19058 -0.27107,-0.31152 -0.47802,-0.30414zM7.32813,9.40039c-0.18031,-0.00254 -0.34803,0.09219 -0.43893,0.24794c-0.0909,0.15575 -0.0909,0.34837 0,0.50412c0.0909,0.15575 0.25862,0.25049 0.43893,0.24794h6.90039c0.18031,0.00254 0.34803,-0.09219 0.43893,-0.24794c0.0909,-0.15575 0.0909,-0.34837 0,-0.50412c-0.0909,-0.15575 -0.25862,-0.25049 -0.43893,-0.24794z"></path></g></g>
</svg>
        <h2 className="text-2xl ml-2 text-white">{user.user.matchedUser.username}</h2>
      </div>
      <div className="space-y-2">
        
        <InfoRow label="Star Rating" value={user.user.matchedUser.profile.starRating} title="Provisional Rating, click to know more" />
        <InfoRow label="Ranking" value={user.user.matchedUser.profile.ranking} />
        <div className="text-lg text-white">Questions Solved</div>
        <InfoRow label="Total" value={user.user.matchedUser.submitStats.acSubmissionNum[0].count} />
        <InfoRow label="Easy" value={user.user.matchedUser.submitStats.acSubmissionNum[1].count} />
        <InfoRow label="Medium" value={user.user.matchedUser.submitStats.acSubmissionNum[2].count} />
        <InfoRow label="Hard" value={user.user.matchedUser.submitStats.acSubmissionNum[3].count} />
        
      </div>
    </div>}
        </div>
    )
}

const InfoRow = ({ label, value, title }:any) => (
    <div className="flex justify-between">
      <span className="text-gray-600 font-semibold">{label}:</span>
      <span title={title} className="text-white">{value}</span>
    </div>
  );