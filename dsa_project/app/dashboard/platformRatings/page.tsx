"use client"
import { CodechefCard } from "@/components/codechefCard";
import CodeforcesCard from "@/components/codeforcesCard";
import GfgCard from "@/components/gfgCard";
import { LeetcodeCard } from "@/components/leetcodeCard";
import { useState,useEffect } from "react";
import axios from "axios";

interface User{
  name: string,
  email: string,
  password: string,
  Leetcode_username: string,
  Codechef_username: string,
  Codeforces_username: string,
  Gfg_username:string

}
export default function PlatformRatings(){
  const[user,setUser]=useState<User>({
    name: " ",
  email: " ",
  password: " ",
  Leetcode_username: "",
  Codechef_username: "",
  Codeforces_username: "",
  Gfg_username:" "
  });
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    try{
      axios.get("https://dev-journey-zeta.vercel.app/api/dashboard",{
        headers:{
          //@ts-ignore
          authorization:localStorage.getItem("token") 
             }
      }).then(res=>{
        if(res.data.success){
          setUser(res.data.user);
          setLoading(false);
        }
        
  
      })
    }
    catch{
      alert("error fetching username");
    }

   },[])
   
        
       
        
       
    
    
    return(
        <div className=" h-screen mt-1 mx-3">
             <div className="text-2xl text-white font-semibold mb-2 ">
                Platform Ratings
             </div>
             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:mb-0 mb-20 overflow-y-auto h-5/6 pb-20">
              <CodechefCard />
             <CodeforcesCard />
              {!loading ? <LeetcodeCard userName={user.Leetcode_username} />:<div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div>}
              <GfgCard />
            
             </div>
             
        </div>
    )}