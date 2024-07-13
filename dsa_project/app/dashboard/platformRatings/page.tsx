"use client"
import { CodechefCard } from "@/components/codechefCard";
import CodeforcesCard from "@/components/codeforcesCard";
import GfgCard from "@/components/gfgCard";
import { LeetcodeCard } from "@/components/leetcodeCard";
import { useState,useEffect } from "react";


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
    name: "",
  email: "",
  password: "",
  Leetcode_username: "",
  Codechef_username: "",
  Codeforces_username: "",
  Gfg_username:""
  });
  

        const leetcode_username=user.Leetcode_username;
        const gfg_username=user.Gfg_username;
        const codechef_username=user.Codechef_username;
        const codeforces_username=user.Codeforces_username;
    
    
    return(
        <div className="overflow-y-auto h-screen ">
             <div className="text-2xl text-white font-semibold mb-2 ">
                Platform Ratings
             </div>
             <div className="grid  gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:mb-0 mb-20">
              {codechef_username? <CodechefCard />: null}
            {codeforces_username?  <CodeforcesCard userName={codeforces_username}/>:null}
              {leetcode_username? <LeetcodeCard userName={leetcode_username}/>:null}
              {gfg_username? <GfgCard userName={gfg_username}/>:null}
            
             </div>
             
        </div>
    )}