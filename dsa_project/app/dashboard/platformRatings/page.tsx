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
export default function platformRatings(){
  const[user,setUser]=useState<User>({
    name: "",
  email: "",
  password: "",
  Leetcode_username: "",
  Codechef_username: "",
  Codeforces_username: "",
  Gfg_username:""
  });
  useEffect(()=>{
    try{
      axios.get("http://localhost:3000/api/dashboard",{
        headers:{
          //@ts-ignore
          authorization:localStorage.getItem("token") 
             }
      }).then(res=>{
        if(res.data.success){
          setUser(res.data.user);
          
        }
        
  
      })
    }
    catch{
      alert("error fetching username");
    }

   },[])
    

        const leetcode_username=user.Leetcode_username;
        const gfg_username=user.Gfg_username;
        const codechef_username=user.Codechef_username;
        const codeforces_username=user.Codeforces_username;
    
    
    return(
        <div className="">
             <div className="text-2xl text-white font-semibold mb-2">
                Platform Ratings
             </div>
             <div className="grid grid-cols-4 ">
              {codechef_username? <CodechefCard userName={codechef_username}/>: null}
            {codeforces_username?  <CodeforcesCard userName={codeforces_username}/>:null}
              {leetcode_username? <LeetcodeCard userName={leetcode_username}/>:null}
              {gfg_username? <GfgCard userName={gfg_username}/>:null}
            
             </div>
             
        </div>
    )}