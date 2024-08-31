"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import React from 'react';
import ProjectCard from "@/components/project";
interface projectInput{
  Title:string,
  Email:string,
  Description:string,
  Tags:string,
  Project_link:string,
  Github_link:string
}




export default function Projects(){
    const[loading,setLoading]=useState(false);
    const[projectInput,setProjectInput]=useState<projectInput>({
        Title:"",
        Email:"",
        Description:"",
        Tags:"",
        Project_link:"",
        Github_link:""
    })
    const[project,setProject]=useState<any>([]);
    const[projectLoading,setProjectLoading]=useState(true);
    useEffect(()=>{
        axios.get('https://dev-journey-zeta.vercel.app/api/project',{
            headers:{
                "Authorization":localStorage.getItem("token")
            }}
        ).then(res=>{
            setProject(res.data.project);
            setProjectLoading(false);
        })
    },[])
    function onDelete(){
        axios.get('https://dev-journey-zeta.vercel.app/api/project',{
            headers:{
                "Authorization":localStorage.getItem("token")
            }}
        ).then(res=>{
            setProject(res.data.project);
            setProjectLoading(false);
        });
    }
     function onSubmit(){
        setLoading(true);
        axios.post(
            "https://dev-journey-zeta.vercel.app/api/project", 
            projectInput, 
            {
              headers: {
                'Authorization': localStorage.getItem("token"), // Example header
                'Content-Type': 'application/json', // Ensure the server understands the request type
                // Add more headers as needed
              }
            }
          )
          .then(res=>{
            setLoading(false);
            axios.get('https://dev-journey-zeta.vercel.app/api/project',{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }}
            ).then(res=>{
                setProject(res.data.project);
                setProjectLoading(false);
            });
            setProjectInput({
                Title:"",
                Email:"",
                Description:"",
                Tags:"",
                Project_link:"",
                Github_link:""
            })

        }) 
    }
    return(
        <>
        <div className="h-screen overflow-y-auto ">
             <div className="h-5/6  overflow-y-auto grid grid-cols-1 md:grid  mr-3">
             <div id="Post project" className="bg-cardBlue-custom rounded-lg shadow-md w-full" >
            <div className="text-2xl text-white font-semibold mb-2 ml-2 ">
                Post your project
            </div>
            <form action={onSubmit} className="flex flex-col mr-2">
            <input type="text" name="" required id="" value={projectInput.Title} className="bg-darkBlue-custom border-slate-800 border-2 ml-2 rounded-lg text-m font-light  p-1 pl-3 text-textBlue-custom my-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Project title"onChange={(e)=>{
                setProjectInput({...projectInput,Title:e.target.value}) 
               
            }}/>
            
            <textarea name="" id="" required value={projectInput.Description} className=" h-40  p-4 text-textBlue-custom  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500  bg-darkBlue-custom border-slate-800 border-2 ml-2 rounded-full text-m font-light  p-1 pl-3 text-textBlue-custom my-1 "  placeholder="Project description"onChange={(e)=>{
                setProjectInput({...projectInput,Description:e.target.value})
               
            }}/>
            
            <input type="text" name="" required value={projectInput.Tags} id="" className="bg-darkBlue-custom border-slate-800 border-2 ml-2 rounded-lg text-m font-light  p-1 pl-3 text-textBlue-custom my-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Tags"onChange={(e)=>{
               
               setProjectInput({...projectInput,Tags:e.target.value})
            }}/>
            
            <input type="text" name=""  id="" required value={projectInput.Project_link} className="bg-darkBlue-custom border-slate-800 border-2 ml-2 rounded-lg text-m font-light  p-1 pl-3 text-textBlue-custom my-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Deployment link"onChange={(e)=>{
                
                setProjectInput({...projectInput,Project_link:e.target.value})
            }}/>
            
            <input type="text" name="" id="" required value={projectInput.Github_link} className="bg-darkBlue-custom border-slate-800 border-2 ml-2 rounded-lg text-m font-light  p-1 pl-3 text-textBlue-custom my-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Github link"onChange={(e)=>{
                setProjectInput({...projectInput,Github_link:e.target.value})
               


            }}/>

            <input type="submit" className="text-white w-32 ml-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-1" value={loading ? "Posting..." : "POST"}/>
            
            </form>
            </div>
            <div className="">
            <div className="text-2xl text-white font-semibold mb-2 ml-2 ">
                Your Projects
            </div> {projectLoading ? <div> </div> : <div> {project.map((pro:any)=><ProjectCard handleDelete={onDelete} project={pro}/>)}</div>}
              

            </div>
             </div>
        </div>
        </>
    )

}