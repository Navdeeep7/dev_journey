"use client"
import axios from "axios";
import { useEffect, useState } from "react";


const InfoRow = ({ label, value, title }:any) => (
  <div className="flex justify-between">
    <span className="text-gray-600 font-semibold">{label}:</span>
    <span title={title} className="text-white">{value}</span>
  </div>
);

  





export function CodechefCard({userName}:any){
  const[userData,setUserData]=useState<any>({});
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    try{
      axios.get(`https://proxy.cors.sh/https://coding-platform-profile-api.onrender.com/codechef/${userName}`,{
        headers:{
            "x-cors-api-key":"temp_6250102632f3a4f01f2adb22d6bfb52d"
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    
    return(
   <div>
 {loading? <div className="skeleton-loader w-74 h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 w-74 shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div> :<div>
        <div className="bg-cardBlue-custom rounded-lg shadow-md p-6 w-74">
              <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.33333,5.33333)"><path d="M35.178,33.008l0.073,0.026l-0.751,-0.326c-0.253,-0.115 -0.525,-0.182 -0.803,-0.197c-0.076,-0.01 -0.152,-0.01 -0.228,0c-0.148,0.013 -0.285,0.086 -0.378,0.202c-0.113,0.096 -0.185,0.231 -0.202,0.378c-0.011,0.032 -0.011,0.066 0,0.098c0.334,0.353 0.762,0.603 1.233,0.72c0.471,0.145 0.943,0.285 1.404,0.414c0.467,0.155 0.864,0.471 1.119,0.891c0.005,0.019 0.005,0.038 0,0.057c0,0.088 -0.212,0.233 -0.622,0.44c-0.207,0.119 -0.518,0.383 -1.036,0.777c-0.323,0.264 -0.67,0.498 -1.036,0.699c-0.311,0.139 -0.583,0.352 -0.793,0.622c-0.005,0.005 -0.009,0.01 -0.013,0.015c-0.165,0.19 -0.145,0.478 0.044,0.643c0.099,0.095 0.231,0.147 0.368,0.145c0.098,-0.002 0.193,-0.027 0.28,-0.073c0.668,-0.421 1.31,-0.883 1.922,-1.383c0.621,-0.514 1.267,-0.997 1.937,-1.445c0.373,-0.228 0.554,-0.466 0.554,-0.71c-0.012,-0.163 -0.1,-0.311 -0.238,-0.399c-0.816,-0.733 -1.784,-1.278 -2.834,-1.594zM14.183,37.742l-2.144,-0.942c-0.711,-0.302 -1.404,-0.648 -2.072,-1.036c0.469,-0.584 1.1,-1.016 1.813,-1.243c0.709,-0.228 1.363,-0.6 1.922,-1.093c0.08,-0.077 0.125,-0.184 0.124,-0.295c-0.004,-0.157 -0.078,-0.303 -0.202,-0.399c-0.148,-0.114 -0.331,-0.174 -0.518,-0.171h-0.3c-0.662,0.497 -1.386,0.904 -2.155,1.212c-0.762,0.314 -1.483,0.717 -2.15,1.202c-0.323,0.289 -0.511,0.701 -0.518,1.134c0.038,0.164 0.154,0.3 0.311,0.363c0.14,0.047 0.285,0.104 0.425,0.161c1.416,0.601 2.745,1.247 3.989,1.937c0.165,0.12 0.32,0.251 0.466,0.394c0.095,0.041 0.197,0.063 0.3,0.062c0.255,0.002 0.503,-0.086 0.699,-0.249c0.2,-0.143 0.305,-0.383 0.275,-0.627c0.008,-0.179 -0.098,-0.343 -0.265,-0.41zM21.984,32.531v-0.01c-0.176,-0.274 -0.397,-0.518 -0.653,-0.72c-0.205,-0.143 -0.45,-0.217 -0.699,-0.212c-0.084,-0.002 -0.167,0.014 -0.243,0.047l-1.554,0.518c-0.099,0.031 -0.202,0.045 -0.306,0.041c-0.184,0.013 -0.367,-0.038 -0.518,-0.145c-0.188,-0.164 -0.348,-0.358 -0.471,-0.575l-0.43,0.29c0.182,0.305 0.417,0.575 0.694,0.798c0.218,0.137 0.473,0.204 0.73,0.192c0.131,-0.001 0.262,-0.02 0.388,-0.057l1.435,-0.518c0.097,-0.038 0.201,-0.057 0.306,-0.057c0.158,-0.01 0.314,0.032 0.445,0.119c0.181,0.148 0.338,0.322 0.466,0.518zM26.403,40.861c-2.346,-0.13 -2.808,1.906 -1.171,3.367c2.367,2.129 8.127,1.663 7.34,-3.051c-2.89,2.455 -4.097,-0.207 -6.169,-0.316zM21.239,40.861c-2.072,0.109 -3.279,2.771 -6.169,0.316c-0.787,4.714 4.973,5.18 7.34,3.051c1.636,-1.461 1.175,-3.497 -1.171,-3.367zM19.757,34.065c-0.418,-0.016 -0.825,0.133 -1.134,0.414c-0.35,0.343 -0.498,0.842 -0.394,1.321c0.051,0.451 0.231,0.877 0.518,1.228c0.244,0.327 0.628,0.519 1.036,0.518c0.267,-0.005 0.529,-0.076 0.761,-0.207c0.466,-0.28 0.694,-0.808 0.694,-1.601c0.06,-0.52 -0.128,-1.038 -0.508,-1.399c-0.288,-0.19 -0.628,-0.285 -0.973,-0.274zM19.736,36.214c-0.286,0 -0.518,-0.232 -0.518,-0.518c0,-0.286 0.232,-0.518 0.518,-0.518c0.286,0 0.518,0.232 0.518,0.518c0,0.286 -0.232,0.518 -0.518,0.518zM24.984,40.182c0.106,-0.085 0.204,-0.179 0.295,-0.28c0.085,-0.096 0.162,-0.2 0.228,-0.311c0.063,-0.097 0.118,-0.2 0.166,-0.306c0.036,-0.077 0.066,-0.156 0.088,-0.238v-0.047c-0.011,-0.014 -0.019,-0.03 -0.026,-0.047c-0.135,0.207 -0.303,0.391 -0.497,0.544c-0.149,0.14 -0.325,0.248 -0.518,0.316c-0.195,0.067 -0.4,0.101 -0.606,0.098c-0.175,0.003 -0.35,-0.021 -0.518,-0.073c-0.144,-0.046 -0.279,-0.116 -0.399,-0.207c-0.121,-0.097 -0.231,-0.209 -0.326,-0.332c-0.1,-0.135 -0.187,-0.279 -0.259,-0.43c-0.011,0.012 -0.02,0.026 -0.026,0.041c0,0 0,0.031 0,0.041c0.071,0.198 0.161,0.389 0.269,0.57c0.098,0.174 0.22,0.332 0.363,0.471c0.128,0.134 0.279,0.244 0.445,0.326c0.164,0.069 0.34,0.108 0.518,0.114l0.021,0.021c0.143,0.001 0.286,-0.026 0.42,-0.078c0.128,-0.046 0.25,-0.112 0.362,-0.193zM27.827,37.515c0.267,-0.004 0.529,-0.075 0.761,-0.207c0.51,-0.364 0.778,-0.979 0.699,-1.601c-0.026,-0.699 -0.192,-1.171 -0.518,-1.399c-0.288,-0.192 -0.628,-0.289 -0.974,-0.28c-0.419,-0.014 -0.826,0.136 -1.134,0.42c-0.348,0.344 -0.495,0.843 -0.388,1.321c0.048,0.451 0.228,0.879 0.518,1.228c0.245,0.326 0.629,0.518 1.036,0.518zM27.631,35.235c0.286,0 0.518,0.232 0.518,0.518c0,0.286 -0.232,0.518 -0.518,0.518c-0.286,0 -0.518,-0.232 -0.518,-0.518c0,-0.286 0.232,-0.518 0.518,-0.518zM33.713,29.175c0.196,-0.997 0.27,-2.576 0.212,-3.919l0.05,-0.245c0.071,-0.349 0.144,-0.701 0.218,-1.052c0.726,-1.586 2.016,-3.155 3.265,-4.674c2.083,-2.533 4.238,-5.152 4.044,-8.201c-0.013,-0.203 -0.067,-0.402 -0.16,-0.584c-0.308,-0.605 -0.647,-1.19 -1.068,-1.842l-0.085,-0.134c-0.098,-0.152 -0.196,-0.305 -0.297,-0.45c-0.074,-0.105 -0.148,-0.204 -0.223,-0.303l-0.092,-0.123c-0.156,-0.209 -0.312,-0.415 -0.467,-0.604c-0.075,-0.093 -0.151,-0.18 -0.289,-0.338c-0.177,-0.205 -0.355,-0.402 -0.538,-0.592l-0.241,-0.243c-0.21,-0.208 -0.421,-0.405 -0.623,-0.582l-0.155,-0.136c-2.626,-2.239 -5.3,-2.825 -6.927,-3.181l-0.897,-0.202c-2.788,-0.534 -5.791,-0.97 -8.86,-0.53c-0.036,0.006 -0.072,0.012 -0.108,0.02c-1.176,0.257 -2.31,0.669 -3.295,1.188c-1.179,0.535 -2.398,1.09 -3.443,1.164c-0.09,0.006 -0.18,0.021 -0.268,0.044c-1.733,0.446 -3.227,1.517 -4.18,2.975l-0.143,0.207c-0.048,0.067 -0.09,0.139 -0.125,0.213c-0.837,1.75 -1.06,3.754 -0.627,5.644c0.008,0.035 0.017,0.069 0.028,0.104c0.275,0.902 0.602,1.763 0.917,2.594l0.106,0.276c0.714,1.676 1.233,3.438 1.544,5.236c0.025,0.146 0.072,0.287 0.139,0.42c0.293,0.581 0.523,1.196 0.683,1.827c0.004,0.016 0.028,0.101 0.033,0.117c0.074,0.254 0.149,0.515 0.229,0.777c0.031,0.1 0.071,0.194 0.119,0.282c0.014,0.083 0.024,0.167 0.052,0.249l1.318,3.769c0.142,0.404 0.449,0.729 0.844,0.892c0.396,0.162 0.841,0.148 1.227,-0.037c2.406,-1.17 8.039,-3.906 15.817,0.958c0.242,0.151 0.518,0.229 0.795,0.229c0.203,0 0.406,-0.041 0.597,-0.124c0.452,-0.199 0.78,-0.605 0.874,-1.089zM38.513,11.562c-0.058,1.79 -1.67,3.75 -3.371,5.818c-0.309,0.376 -0.62,0.757 -0.927,1.14c1.124,-2.914 2.201,-5.829 3.18,-8.779l0.039,0.053c0.077,0.11 0.152,0.229 0.228,0.347l0.093,0.146c0.292,0.452 0.537,0.864 0.758,1.275zM35.437,7.54c0.166,0.145 0.332,0.301 0.494,0.462l0.194,0.195c0.144,0.149 0.286,0.308 0.428,0.471c0.001,0.002 0.066,0.077 0.068,0.078l0.167,0.196c0.09,0.11 0.178,0.228 0.266,0.345c-1.627,1.372 -3.858,6.483 -4.474,11.472c-0.169,0.257 -0.34,0.512 -0.494,0.776c-0.676,-0.448 -1.536,-0.845 -2.587,-1.179c-0.2,-0.064 -0.416,-0.121 -0.628,-0.18c0.149,-2.12 0.346,-4.308 0.538,-6.303c0.637,-3.375 2.224,-5.181 2.933,-8.222c0.947,0.372 1.963,0.92 2.983,1.79zM29.726,4.909c0.644,0.141 1.395,0.312 2.202,0.594c-1.39,2.614 -2.329,5.447 -2.774,8.381c-0.311,2.065 -0.466,4.148 -0.49,6.234c-1.169,-0.308 -2.5,-0.533 -3.897,-0.646c-0.041,-1.02 -0.064,-1.996 -0.021,-2.583c0.158,-2.187 0.341,-8.74 1.566,-12.598c0.81,0.11 1.643,0.25 2.518,0.417zM26.126,4.265c-2.633,4.386 -2.254,10.092 -1.601,15.187c-0.949,-0.068 -1.923,-0.083 -2.898,-0.031c-0.521,-3.135 -1.057,-6.924 -1.519,-9.945c-0.146,-1.439 -0.019,-2.892 0.373,-4.284c0.177,-0.381 0.279,-0.684 0.372,-0.928c0.07,-0.017 0.137,-0.045 0.207,-0.061c1.655,-0.23 3.301,-0.167 5.066,0.062zM18.495,5.143c0.532,-0.279 1.095,-0.493 1.668,-0.676c-0.14,0.259 -0.26,0.552 -0.356,0.881c-0.35,1.447 -0.469,2.94 -0.352,4.424c0.219,3.282 0.796,6.523 1.676,9.686c-0.911,0.069 -1.815,0.195 -2.689,0.392c-0.51,-2.158 -0.421,-4.552 -0.62,-6.795c-0.21,-2.68 -1.073,-5.216 -2.179,-6.786c0.983,-0.29 1.941,-0.711 2.852,-1.126zM14.104,6.592c0.464,-0.044 0.922,-0.148 1.377,-0.273c1.078,1.567 1.303,4.042 1.545,6.74c0.196,2.26 0.414,4.672 1.161,6.846c-0.742,0.18 -1.462,0.409 -2.141,0.696c-0.473,-1.914 -0.737,-4.005 -1.128,-5.916c-0.58,-2.828 -0.658,-5.361 -1.616,-6.133c-0.282,-0.39 -0.923,-0.457 -0.996,-0.888c0.496,-0.5 1.11,-0.874 1.798,-1.072zM14.424,21.466c-0.151,-0.438 -0.319,-0.87 -0.52,-1.288c-0.354,-1.952 -0.925,-3.861 -1.679,-5.629l-0.084,-0.222c-0.292,-0.769 -0.593,-1.563 -0.836,-2.352c-0.258,-1.18 -0.127,-2.426 0.372,-3.526l0.095,-0.137c0.08,-0.122 0.177,-0.227 0.268,-0.339c-0.003,0.076 -0.019,0.151 -0.012,0.227c0.03,0.188 0.104,0.365 0.218,0.518c0.948,0.756 1.44,3.16 2.015,5.978c0.398,1.95 0.859,4.085 1.524,6.031c-0.479,0.216 -0.932,0.463 -1.361,0.739zM22.646,24.365c-2.859,0 -5.176,0.746 -6.8,1.433l-0.466,-1.331c2.167,-1.862 6.097,-2.271 9.242,-2.005c3.502,0.3 5.826,1.354 6.218,1.896c0.031,0.204 0.052,0.447 0.07,0.704c-0.034,0.209 -0.022,0.414 0.028,0.608c0.007,0.252 0.01,0.508 0.007,0.769c-3.093,-1.543 -5.89,-2.074 -8.299,-2.074z"></path></g></g>
        </svg>  
        
              
                <h2 className="text-2xl  text-white">
                
                  {userData.username}</h2>
              </div>
              <div className="space-y-2">
                
                <InfoRow label="Country"  value={userData.country} />
                <InfoRow label="Rating" value={userData.rating.slice(0,4)} title="Provisional Rating, click to know more" />
                <InfoRow label="Global Rank" value={userData.global_rank} />
                <InfoRow label="Country Rank" value={userData.country_rank} />
                <InfoRow label="Stars" value={<span className="text-yellow-400">{userData.stars}</span>} />
                <InfoRow label="Contests" value={userData.no_of_contest} />
                <InfoRow label="Problems Solved" value={userData.problems_solved} />
              </div>
            </div>
                </div>}
   </div>
       

        
    )
}