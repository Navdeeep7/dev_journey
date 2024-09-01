
import React, { useState } from 'react';
import { Router, Trash2 } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
//@ts-ignore
export function Tag({text}){
    return(
        <div className='flex mx-1 my-1'>
            <div className='bg-hoverBlue-custom text-white px-4 rounded-lg'>{text}</div>
        </div>
    )
}
//@ts-ignore
export default function ProjectCard({project,handleDelete}){
    const[loading,setLoading]=useState(false);
    const projectId={
        projectId:project._id
    }
    const router=  useRouter();
     function onDelete(){
        setLoading(true)
        axios.post("https://dev-journey-zeta.vercel.app/api/deleteProject",projectId).then(res=>{
            
            handleDelete();
            setLoading(false);
        })

     }
   const str=project.Tags;  
   const array = str.split(' ');
   
  
    return(
        <div className="bg-cardBlue-custom rounded-lg shadow-md w-full pl-2 pt-2 my-3 pb-2">
           <h1 className="text-gray-300 text-3xl font-semibold ">{project.Title}</h1>
           
           <h3 className="text-gray-400">Description:{project.Description}</h3>
           <h3 className="text-gray-400">Github Link: <a href={project.Github_link}  className='text-blue-300 underline'>Github</a></h3>
           <h3 className="text-gray-400">Deployment Link: <a href={project.Project_link}  className='text-blue-300 underline'>{project.Title}</a></h3>
           <div className='flex flex-wrap'> {array.map((tag:any,key:any)=><Tag key={key} text={tag}/>)}</div>
           <button
      onClick={onDelete}
      className="flex items-center justify-center px-4 py-1 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-300 ease-in-out my-1"
    >
      <Trash2 size={18} className="mr-2" />{loading ? "Deleting..." : "Delete"}
      
    </button>
        </div>
    )
}