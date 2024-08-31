"use client"

import AllProjectCard from "@/components/allProject";
import axios from "axios";
import { useEffect, useState } from "react"

export default function ExploreProjects(){
    const[projects,setProjects]=useState<any>([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get("https://dev-journey-zeta.vercel.app/api/allProjects").then(res=>{
            setProjects(res.data);
            setLoading(false);
        })
    },[])
    return(
        <div className="h-screen overflow-y-auto ">
            <div className="h-5/6 overflow-y-auto mr-3 ">
            <div className="text-2xl text-white font-semibold mb-2 ml-2 ">
                Explore Projects 
            </div>
           {loading ? <div> </div> : <div className="grid grid-cols-1 sm:grid-cols-2  gap-3"> {projects.map((p:any,key:any)=><AllProjectCard key={key} project={p}/>)}</div>}

            </div>
        </div>
    )
}