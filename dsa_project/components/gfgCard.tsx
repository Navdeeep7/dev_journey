"use client"
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
const CodingLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#43a047" d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"></path>
    </svg>
);

const GfgCard = ({ userName }:any) => {
  const[userData,setUserData]=useState<any>({});
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    try{
      axios.get(`https://proxy.cors.sh/https://coding-platform-profile-api.onrender.com/geeksforgeeks/${userName}`,{
        headers:{
            "x-cors-api-key":"temp_adfb017fadb769bcaf560cce1ff7479f"
        }
    }).then(res=>{
        setUserData(res.data);
        if(res.data){
          setLoading(false);
        }
      })
    }
    catch(e){
      alert(e);
    }
  },[])
  return (
    <div>
      {loading? <div className="skeleton-loader w-74 h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 w-74 shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div>:<div className="bg-cardBlue-custom rounded-lg shadow-md p-6 w-74">
      <div className="flex items-center mb-4">
        <CodingLogo />
        <div>
          <h2 className="text-2xl font-md text-white ml-2">{userData.username}</h2>
          
        </div>
      </div>
      <div className="space-y-2">
        <InfoRow label="College Rank" value={userData.collage_rank} />
        <InfoRow label="Overall Coding Score" value={userData.overall_coding_score} />
        <InfoRow label="Total Problems Solved" value={userData.total_problems_solved} />
        <InfoRow label="Monthly Score" value={userData.monthly_score} />
        
      </div>
      <div className="mt-4">
        <h3 className="text-lg  mb-2 text-white ">Problems Solved by Difficulty</h3>
        <div className="grid grid-cols-2 gap-2">
          <ProblemCategory label="School" value={userData.school_problems_solved} />
          <ProblemCategory label="Basic" value={userData.basic_problems_solved} />
          <ProblemCategory label="Easy" value={userData.easy_problems_solved} />
          <ProblemCategory label="Medium" value={userData.medium_problems_solved} />
          <ProblemCategory label="Hard" value={userData.hard_problems_solved} />
        </div>
      </div>
    </div>}
    </div>
    
  );
};

const InfoRow = ({ label, value }:any) => (
  <div className="flex justify-between">
    <span className="text-gray-600 font-semibold">{label}:</span>
    <span className='text-white'>{value}</span>
  </div>
);

const ProblemCategory = ({ label, value }:any) => (
  <div className="bg-gray-100 p-2 rounded">
    <span className="text-sm font-semibold">{label}: </span>
    <span className="text-sm">{value}</span>
  </div>
);

export default GfgCard;