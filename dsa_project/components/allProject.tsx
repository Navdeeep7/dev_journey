
import React from 'react';
//@ts-ignore
export function Tag({text}){
    return(
        <div className='flex mx-1 my-1'>
            <div className='bg-hoverBlue-custom text-white px-4 rounded-lg'>{text}</div>
        </div>
    )
}
//@ts-ignore
export default function AllProjectCard({project}){
  
    const str=project.Tags;  
   const array = str.split(' ');
    return(
        <div className="bg-cardBlue-custom rounded-lg shadow-md w-full pl-2 pt-2 my-2 pb-2">
           <h1 className="text-gray-200 text-2xl font-semibold ">{project.Title}</h1>
           <h3 className="text-gray-400">Developer:{project.Email}</h3>
           <h3 className="text-gray-400">Description:{project.Description}</h3>
           <h3 className="text-gray-400">Github Link: <a href={project.Github_link} className='text-blue-300 underline'>Github</a></h3>
           <h3 className="text-gray-400">Deployment Link: <a href={project.Project_link}  className='text-blue-300 underline'>{project.Title}</a></h3>
           <div className='flex '> {array.map((tag:any,key:any)=><Tag key={key} text={tag}/>)}</div>
           

        </div>
    )
}