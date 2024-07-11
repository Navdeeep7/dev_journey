"use client"
import Link from "next/link";
import React from "react";
//@ts-ignore
export function JobCard({job}){
    return(
        <div className="bg-cardBlue-custom rounded-xl flex flex-col justify-between" >
       <div className="text-white font-semibold flex justify-center items-center text-xl py-2">
   
    {job.company.name}
</div>

<div className="flex items-center text-white px-2 py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " viewBox="0 0 20 20" fill="white">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
    </svg>
    Job title: {job.title}
</div>
<div className="flex items-center text-white px-2 py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " viewBox="0 0 20 20" fill="white">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>
    Posted: {job.postDate}
</div>
<div className="flex items-center text-white px-2 py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="white">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
    </svg>
    Role: {job.type}
</div>
<div className="flex items-center text-white px-2 py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="white">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
    Location: {job.location}
</div>
<div>
<Link href={job.url} className="flex justify-center">
                    <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply</button>
                    </Link>
</div>
        

        </div>
    )
}