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
    //@ts-ignore
     function onSubmit(e){
      e.preventDefault();
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
             <div className="h-5/6  overflow-y-auto grid grid-cols-1 md:grid  md:mr-3 m-3 md:m-0">
            
             <div className="bg-cardBlue-custom text-gray-100 p-8 rounded-xl shadow-2xl w-full mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Post Your Project</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="Title" className="text-sm font-medium text-gray-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
            </svg>
            Project Title
          </label>
          <input
            id="Title"
            type="text"
            name="Title"
            required
            value={projectInput.Title}
            className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter project title"
            onChange={(e) => {
                setProjectInput({...projectInput, Title: e.target.value})
            }}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="Description" className="text-sm font-medium text-gray-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            Project Description
          </label>
          <textarea
            id="Description"
            name="Description"
            required
            value={projectInput.Description}
            className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 h-32 resize-none"
            placeholder="Describe your project"
            onChange={(e) => {
                setProjectInput({...projectInput, Description: e.target.value})
            }}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="Tags" className="text-sm font-medium text-gray-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Tags
          </label>
          <input
            id="Tags"
            type="text"
            name="Tags"
            value={projectInput.Tags}
            className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter tags (space separated)"
            onChange={(e) => {
                setProjectInput({...projectInput, Tags: e.target.value})
            }}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="Project_link" className="text-sm font-medium text-gray-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            Deployment Link
          </label>
          <input
            id="Project_link"
            type="text "
            name="Project_link"
            required
            value={projectInput.Project_link}
            className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="https://your-project.com"
            onChange={(e) => {
                setProjectInput({...projectInput, Project_link: e.target.value})
            }}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="Github_link" className="text-sm font-medium text-gray-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            GitHub Link
          </label>
          <input
            id="Github_link"
            type="text"
            name="Github_link"
            required
            value={projectInput.Github_link}
            className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="https://github.com/your-username/your-repo"
            onChange={(e) => {
                setProjectInput({...projectInput, Github_link: e.target.value})
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200 flex items-center justify-center space-x-2"
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          )}
          <span>{loading ? 'Posting...' : 'Post Project'}</span>
        </button>
      </form>
    </div>


            <div className="">
            <div className=" ml-2 flex justify-center text-3xl font-bold my-6 text-center text-blue-400">
                Your Projects
            </div> {projectLoading ? <div> </div> : <div> {project.map((pro:any,key:any)=><ProjectCard key={key} handleDelete={onDelete} project={pro}/>)}</div>}
              

            </div>
             </div>
        </div>
        </>
    )

}