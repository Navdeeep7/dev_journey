"use client"
import { JobCard } from "@/components/jobcard";
import axios from "axios";
import { useEffect, useState } from "react";


export default  function Jobs(){
    const data={"success":true,"message":"","data":[{"id":"3958376323","title":"Backend Developer","url":"https://www.linkedin.com/jobs/view/3958376323","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"24597978","company":{"name":"Onefinnet (Elevate 2.0)","logo":"https://media.licdn.com/dms/image/D560BAQHPMQnzr89bYw/company-logo_200_200/0/1715398365225?e=1728518400\u0026v=beta\u0026t=lofePFyPc_kkG_Ei0nDKwMeHHOSpLNj1fv-Xk4KtpXY","url":"https://www.linkedin.com/company/elevatecareer/life","staffCountRange":{},"headquarter":{}},"location":"Noida, Uttar Pradesh, India (On-site)","type":"Full-time","postDate":"2 weeks ago","postAt":"2024-06-25 10:13:07 +0000 UTC","postedTimestamp":1719310387000},{"id":"3958926706","title":"Java Application Developer with Devops","url":"https://www.linkedin.com/jobs/view/3958926706","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"806482509","company":{"name":"Luxurious Webtech","logo":"https://media.licdn.com/dms/image/C4E0BAQEI7jkOQv15yg/company-logo_200_200/0/1630613439658/luxurious_webtech_logo?e=1728518400\u0026v=beta\u0026t=t1KEEKn_QQGOqnNIE4bwviUH1isrvfWwGIwRG7Y3FXw","url":"https://www.linkedin.com/company/luxurious-webtech/life","staffCountRange":{},"headquarter":{}},"location":"Pune, Maharashtra, India (Remote)","type":"Full-time","postDate":"1 week ago","postAt":"2024-06-25 16:50:55 +0000 UTC","postedTimestamp":1719334255000},{"id":"3966397365","title":"Software Engineering Intern","url":"https://www.linkedin.com/jobs/view/3966397365","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"21682134","company":{"name":"Microsoft","logo":"https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1728518400\u0026v=beta\u0026t=34tBPOyfGGpC4aZwnT4lMRxIAlhe9quc1CECkc_VtMI","url":"https://www.linkedin.com/company/microsoft/life","staffCountRange":{},"headquarter":{}},"location":"Uttarakhand, India (On-site)","type":"Internship","postDate":"2 days ago","postAt":"2024-07-07 11:18:03 +0000 UTC","postedTimestamp":1720351083000},{"id":"3961629223","title":"Back End Developer","url":"https://www.linkedin.com/jobs/view/3961629223","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"94174501","company":{"name":"Zoho","logo":"https://media.licdn.com/dms/image/D560BAQEZkAuyZ_Jpyg/company-logo_200_200/0/1704168937972/zoho_logo?e=1728518400\u0026v=beta\u0026t=_TNEClImv9dnS6oaKuLdpVOUOKMt80rQRJgb8_U9V_U","url":"https://www.linkedin.com/company/zoho/life","staffCountRange":{},"headquarter":{}},"location":"Chennai, Tamil Nadu, India (On-site)","type":"Full-time","postDate":"1 week ago","postAt":"2024-06-27 07:21:48 +0000 UTC","postedTimestamp":1719472908000},{"id":"3960105088","title":"Intern - Software Development Engineer","url":"https://www.linkedin.com/jobs/view/3960105088","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"55345637","company":{"name":"Razorpay","logo":"https://media.licdn.com/dms/image/C560BAQHggYLcXxs78w/company-logo_200_200/0/1630638664845/razorpay_logo?e=1728518400\u0026v=beta\u0026t=BPEN2grSN4WysldJ-PGgp0JJeVIQyS-5iRkrP5Yum9w","url":"https://www.linkedin.com/company/razorpay/life","staffCountRange":{},"headquarter":{}},"location":"Bengaluru, Karnataka, India","type":"Internship","postDate":"1 week ago","postAt":"2024-06-26 16:29:00 +0000 UTC","postedTimestamp":1719419340000},{"id":"3958298911","title":"Flutter Developer","url":"https://www.linkedin.com/jobs/view/3958298911","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"100927664","company":{"name":"Cloudifyapps","logo":"https://media.licdn.com/dms/image/D560BAQFvSEO9-G1Asg/company-logo_200_200/0/1666779103594/cloudifyapps_logo?e=1728518400\u0026v=beta\u0026t=IAjo5qN1B_lpape3QrIfbXH8CSeE0j543td8_jDZ-Fo","url":"https://www.linkedin.com/company/cloudifyapps/life","staffCountRange":{},"headquarter":{}},"location":"Greater Kolkata Area (On-site)","type":"Full-time","postDate":"2 weeks ago","postAt":"2024-06-24 13:10:41 +0000 UTC","postedTimestamp":1719234641000},{"id":"3964241680","title":"Java Developer","url":"https://www.linkedin.com/jobs/view/3964241680","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"22017497","company":{"name":"Infosys","logo":"https://media.licdn.com/dms/image/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/0/1692876768583/infosys_logo?e=1728518400\u0026v=beta\u0026t=ZW4fpFisLoTfWOYQPWxluQRCt9soyrpgA0xPFKYLXLg","url":"https://www.linkedin.com/company/infosys/life","staffCountRange":{},"headquarter":{}},"location":"Chandigarh, Chandigarh, India (On-site)","type":"Full-time","postDate":"16 hours ago","postAt":"2024-07-08 23:02:19 +0000 UTC","postedTimestamp":1720479739000},{"id":"3962878231","title":"Java Developer","url":"https://www.linkedin.com/jobs/view/3962878231","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"22017497","company":{"name":"Infosys","logo":"https://media.licdn.com/dms/image/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/0/1692876768583/infosys_logo?e=1728518400\u0026v=beta\u0026t=ZW4fpFisLoTfWOYQPWxluQRCt9soyrpgA0xPFKYLXLg","url":"https://www.linkedin.com/company/infosys/life","staffCountRange":{},"headquarter":{}},"location":"Sahibzada Ajit Singh Nagar, Punjab, India (On-site)","type":"Full-time","postDate":"16 hours ago","postAt":"2024-07-08 23:02:22 +0000 UTC","postedTimestamp":1720479742000},{"id":"3965416949","title":"Java Software Engineer","url":"https://www.linkedin.com/jobs/view/3965416949","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"178140590","company":{"name":"Infosys","logo":"https://media.licdn.com/dms/image/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/0/1692876768583/infosys_logo?e=1728518400\u0026v=beta\u0026t=ZW4fpFisLoTfWOYQPWxluQRCt9soyrpgA0xPFKYLXLg","url":"https://www.linkedin.com/company/infosys/life","staffCountRange":{},"headquarter":{}},"location":"Trivandrum, Kerala, India (On-site)","type":"Full-time","postDate":"4 days ago","postAt":"2024-07-05 10:00:27 +0000 UTC","postedTimestamp":1720173627000},{"id":"3958346114","title":"Senior Java Software Engineer","url":"https://www.linkedin.com/jobs/view/3958346114","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"147485141","company":{"name":"OneIT Pty Ltd","logo":"https://media.licdn.com/dms/image/D560BAQGI7yLv5hq7-Q/company-logo_200_200/0/1720424636899/oneit_perth_logo?e=1728518400\u0026v=beta\u0026t=Qsyo0vPjUO7d1U4cPtXH9IW3yO7zwRaiE3yvc1cc9ug","url":"https://www.linkedin.com/company/oneit-perth/life","staffCountRange":{},"headquarter":{}},"location":"India (Remote)","type":"Full-time","postDate":"2 weeks ago","postAt":"2024-06-25 08:27:48 +0000 UTC","postedTimestamp":1719304068000},{"id":"3967625999","title":"Flutter Developer","url":"https://www.linkedin.com/jobs/view/3967625999","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"176376976","company":{"name":"SOFTSERV INC","logo":"https://media.licdn.com/dms/image/D4D0BAQHoCEbp6kCkTA/company-logo_200_200/0/1702536866589/softservinc_logo?e=1728518400\u0026v=beta\u0026t=eDaeJgPcPAPchvTxAtqdzWQzNSXwv8kN6mw64An9EEk","url":"https://www.linkedin.com/company/softservinc/life","staffCountRange":{},"headquarter":{}},"location":"Jaipur, Rajasthan, India (On-site)","type":"Full-time","postDate":"4 days ago","postAt":"2024-07-05 08:49:51 +0000 UTC","postedTimestamp":1720169391000},{"id":"3951984686","title":"Flutter Developer","url":"https://www.linkedin.com/jobs/view/3951984686","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"959960531","company":{"name":"Vrundaz Technology","logo":"https://media.licdn.com/dms/image/C4D0BAQGb1f1ftALTEw/company-logo_200_200/0/1640428159047?e=1728518400\u0026v=beta\u0026t=4_6C42C1xvidLMGrBtvRWy6MsUGi40q5DUhNbwGGZWk","url":"https://www.linkedin.com/company/vrundaz-technology/life","staffCountRange":{},"headquarter":{}},"location":"Vadodara, Gujarat, India (On-site)","type":"Full-time","postDate":"2 weeks ago","postAt":"2024-06-22 07:11:12 +0000 UTC","postedTimestamp":1719040272000},{"id":"3953694701","title":"Java Developer","url":"https://www.linkedin.com/jobs/view/3953694701","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"957121148","company":{"name":"Infosys","logo":"https://media.licdn.com/dms/image/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/0/1692876768583/infosys_logo?e=1728518400\u0026v=beta\u0026t=ZW4fpFisLoTfWOYQPWxluQRCt9soyrpgA0xPFKYLXLg","url":"https://www.linkedin.com/company/infosys/life","staffCountRange":{},"headquarter":{}},"location":"Mohali district, India (On-site)","type":"Full-time","postDate":"2 weeks ago","postAt":"2024-06-20 05:20:52 +0000 UTC","postedTimestamp":1718860852000},{"id":"3966871296","title":"Java Developer professional","url":"https://www.linkedin.com/jobs/view/3966871296","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"52002302","company":{"name":"Volvo Group","logo":"https://media.licdn.com/dms/image/C4D0BAQF6VxeKGI-lyg/company-logo_200_200/0/1632477690193/volvo_group_logo?e=1728518400\u0026v=beta\u0026t=H4zchtfJEt9KSqZliLRC-Pfpfj6nVkEQMb_WJZd2aRg","url":"https://www.linkedin.com/company/volvo-group/life","staffCountRange":{},"headquarter":{}},"location":"Bengaluru, Karnataka, India","type":"Full-time","postDate":"1 day ago","postAt":"2024-07-08 08:00:59 +0000 UTC","postedTimestamp":1720425659000},{"id":"3957690504","title":"Flutter Developer","url":"https://www.linkedin.com/jobs/view/3957690504","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"626379114","company":{"name":"JNY Consulting AB","logo":"https://media.licdn.com/dms/image/C4E0BAQFrQsF_G2oNGg/company-logo_200_200/0/1643780064599/jny_consulting_ab_logo?e=1728518400\u0026v=beta\u0026t=XQzjUhWkkl7nQHujQdM_8hG5sBrF2npfvJDTdd-yteM","url":"https://www.linkedin.com/company/jny-consulting-ab/life","staffCountRange":{},"headquarter":{}},"location":"Greater Delhi Area (Hybrid)","type":"Full-time","postDate":"2 weeks ago","postAt":"2024-06-24 09:12:35 +0000 UTC","postedTimestamp":1719220355000},{"id":"3967695430","title":"Software Engineer Intern","url":"https://www.linkedin.com/jobs/view/3967695430","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"425365819","company":{"name":"Cyncly","logo":"https://media.licdn.com/dms/image/C4E0BAQG0QRC19yBAjQ/company-logo_200_200/0/1663308836916/cyncly_logo?e=1728518400\u0026v=beta\u0026t=RY2HxBwl5qhwcX1ozMgwL87FF5qFaSJqulULl-RHr7Y","url":"https://www.linkedin.com/company/cyncly/life","staffCountRange":{},"headquarter":{}},"location":"Pune, Maharashtra, India (On-site)","type":"Internship","postDate":"3 days ago","postAt":"2024-07-05 16:09:09 +0000 UTC","postedTimestamp":1720195749000},{"id":"3970029441","title":"Software Engineering Intern","url":"https://www.linkedin.com/jobs/view/3970029441","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"221878207","company":{"name":"HashiCorp","logo":"https://media.licdn.com/dms/image/D560BAQE7rhUPFCEgbA/company-logo_200_200/0/1720028923991/hashicorp_logo?e=1728518400\u0026v=beta\u0026t=6mzm0PIqPobyZ9vQkWYsNc_sQ09X8w52C4zEgq-zQ7A","url":"https://www.linkedin.com/company/hashicorp/life","staffCountRange":{},"headquarter":{}},"location":"Bengaluru, Karnataka, India (Hybrid)","type":"Internship","postDate":"23 hours ago","postAt":"2024-07-08 15:41:50 +0000 UTC","postedTimestamp":1720453310000},{"id":"3962748731","title":"JAVA Developer","url":"https://www.linkedin.com/jobs/view/3962748731","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"853433600","company":{"name":"Dun \u0026 Bradstreet Technology and Corporate Services India LLP","logo":"https://media.licdn.com/dms/image/C560BAQFuekWFT_JUiw/company-logo_200_200/0/1633417662796/dun_bradstreet_technology_servicess_llp_logo?e=1728518400\u0026v=beta\u0026t=o4NcMc4uPCgLp24o5fJglWpA_o1It2z6xF-rUSyuw3Y","url":"https://www.linkedin.com/company/dun-bradstreet-technology-servicess-llp/life","staffCountRange":{},"headquarter":{}},"location":"Hyderabad, Telangana, India (Hybrid)","type":"Full-time","postDate":"1 week ago","postAt":"2024-07-01 05:41:54 +0000 UTC","postedTimestamp":1719812514000},{"id":"3970148747","title":"Java Developer","url":"https://www.linkedin.com/jobs/view/3970148747","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"947817181","company":{"name":"EPAM Systems","logo":"https://media.licdn.com/dms/image/D4E0BAQERhwCA4aBweA/company-logo_200_200/0/1706845800358/epam_systems_logo?e=1728518400\u0026v=beta\u0026t=yVzzzoJRnlCuzT0pFZNoXFZc-naj25L9APWNqbn_s_U","url":"https://www.linkedin.com/company/epam-systems/life","staffCountRange":{},"headquarter":{}},"location":"Chennai, Tamil Nadu, India (Remote)","type":"Full-time","postDate":"54 minutes ago","postAt":"2024-07-09 14:19:47 +0000 UTC","postedTimestamp":1720534787000},{"id":"3963907780","title":"Python Developer - Intern","url":"https://www.linkedin.com/jobs/view/3963907780","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"287503341","company":{"name":"Nutrabay","logo":"https://media.licdn.com/dms/image/C510BAQFYf5dCCSvaJw/company-logo_200_200/0/1630566627533/nutrabaycom_logo?e=1728518400\u0026v=beta\u0026t=Txb12UauUiJFCR2BT653_FfCnZLdZFJLwiH0IvuqkP8","url":"https://www.linkedin.com/company/nutrabay.com/life","staffCountRange":{},"headquarter":{}},"location":"Gurugram, Haryana, India (On-site)","type":"Internship","postDate":"6 days ago","postAt":"2024-07-03 10:18:19 +0000 UTC","postedTimestamp":1720001899000},{"id":"3970742013","title":"Javascript Developer","url":"https://www.linkedin.com/jobs/view/3970742013","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"874494754","company":{"name":"Soul AI","logo":"https://media.licdn.com/dms/image/D4D0BAQHhkpaac5S9nw/company-logo_200_200/0/1719255855069?e=1728518400\u0026v=beta\u0026t=rvtZl7SNlXl0R3fycnsQrensAOuUTWDWtkMbAPlU6ZQ","url":"https://www.linkedin.com/company/soul-ai/life","staffCountRange":{},"headquarter":{}},"location":"India (Remote)","type":"Full-time","postDate":"6 hours ago","postAt":"2024-07-09 08:57:14 +0000 UTC","postedTimestamp":1720515434000},{"id":"3959114079","title":"Java Developer","url":"https://www.linkedin.com/jobs/view/3959114079","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"40995622","company":{"name":"Macquarie Group","logo":"https://media.licdn.com/dms/image/C4D0BAQFWxaMqRxHNZQ/company-logo_200_200/0/1630472263203/macquariegroup_logo?e=1728518400\u0026v=beta\u0026t=VmXHdIbyrusJLw59gS3fUv4spJAo_ln47vIkk-k2LkU","url":"https://www.linkedin.com/company/macquariegroup/life","staffCountRange":{},"headquarter":{}},"location":"Gurugram, Haryana, India","type":"Full-time","postDate":"1 week ago","postAt":"2024-06-25 19:54:25 +0000 UTC","postedTimestamp":1719345265000},{"id":"3970151231","title":"Java Developer","url":"https://www.linkedin.com/jobs/view/3970151231","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"951050687","company":{"name":"EPAM Systems","logo":"https://media.licdn.com/dms/image/D4E0BAQERhwCA4aBweA/company-logo_200_200/0/1706845800358/epam_systems_logo?e=1728518400\u0026v=beta\u0026t=yVzzzoJRnlCuzT0pFZNoXFZc-naj25L9APWNqbn_s_U","url":"https://www.linkedin.com/company/epam-systems/life","staffCountRange":{},"headquarter":{}},"location":"Pune, Maharashtra, India (Remote)","type":"Full-time","postDate":"54 minutes ago","postAt":"2024-07-09 14:19:51 +0000 UTC","postedTimestamp":1720534791000},{"id":"3970148776","title":"Java Developer","url":"https://www.linkedin.com/jobs/view/3970148776","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"947817181","company":{"name":"EPAM Systems","logo":"https://media.licdn.com/dms/image/D4E0BAQERhwCA4aBweA/company-logo_200_200/0/1706845800358/epam_systems_logo?e=1728518400\u0026v=beta\u0026t=yVzzzoJRnlCuzT0pFZNoXFZc-naj25L9APWNqbn_s_U","url":"https://www.linkedin.com/company/epam-systems/life","staffCountRange":{},"headquarter":{}},"location":"Hyderabad, Telangana, India (Remote)","type":"Full-time","postDate":"54 minutes ago","postAt":"2024-07-09 14:19:44 +0000 UTC","postedTimestamp":1720534784000},{"id":"3968168791","title":"Management Trainee – Python Developer-COR028952","url":"https://www.linkedin.com/jobs/view/3968168791","referenceId":"+XjktfEf9E9I1NDL5l/yGw==","posterId":"774081933","company":{"name":"Genpact","logo":"https://media.licdn.com/dms/image/D560BAQELEf-ss5CuTQ/company-logo_200_200/0/1719928740495?e=1728518400\u0026v=beta\u0026t=L3sY-zMleBGkbnryf0ULdOfVnasrjECuCS3HH75xC_0","url":"https://www.linkedin.com/company/genpact/life","staffCountRange":{},"headquarter":{}},"location":"Bengaluru, Karnataka, India (On-site)","type":"Full-time","postDate":"4 days ago","postAt":"2024-07-05 15:11:57 +0000 UTC","postedTimestamp":1720192317000}],"total":82665}
    const[jobs,setJobs]=useState(data.data)
    const[loading,setLoading]=useState(false);
    const [searchValue,setSearchvalue]=useState("");
    function handleSearch(){
      setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://proxy.cors.sh/https://linkedin-data-api.p.rapidapi.com/search-jobs',
            params: {
              keywords: searchValue || "",
              locationId: '102713980',
              datePosted: 'anyTime',
              sort: 'mostRelevant'
            },
            headers: {
            //  'x-rapidapi-key': 'debdbf5b4bmshf83fa96831a5309p1f42e9jsnf1e077964afc',
              'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
               "x-cors-api-key":"temp_adfb017fadb769bcaf560cce1ff7479f"
            }
          };
          
          try {
               axios.request(options).then(res=>{
                setJobs(res.data.data);
                if(res.data.data){
                    setLoading(false);
                }

                
                
               });
          }
           catch (error) {
              console.error(error);
          }
         
    
    }
    

    
    return(
        <div className="h-screen bg-darkBlue-custom  mt-1 ">
            <div className="text-2xl text-white font-semibold mb-2 ">
              <div className="ml-2">Job Postings</div>
            
            <input type="text" name="" id="" className="bg-darkBlue-custom border-slate-800 border-2 ml-2 rounded-full text-lg font-medium  p-1 pl-3 text-textBlue-custom " placeholder="Search jobs"onChange={(e)=>{
                setSearchvalue(e.target.value);
            }}/>
            <button className="bg-hoverBlue-custom  rounded-full text-lg font-normal p-1 ml-2 px-2" onClick={handleSearch}>Search</button>
           </div>
           {loading? <div className="h-5/6  overflow-y-auto grid  gap-3 sm:grid-cols-2 lg:grid-cols-4  ">
            <div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6  shadow-md p-6 animate-pulse ">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div><div className="skeleton-loader h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div><div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6  shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div><div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6  shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div><div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div><div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6  shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div><div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div><div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div></div>: <div className="h-5/6 grid overflow-y-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3  mx-3 ">
 
 { jobs.map((job,index)=><JobCard key={index} job={job}/>)}
 
 </div>}
 
          
        </div>
    )
}