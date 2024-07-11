"use client"
import { useRouter } from 'next/navigation'

//@ts-ignore
import axios from "axios";
import Link from 'next/link'
import { useState } from 'react'
import PasswordInput from '@/components/password';
interface forminput{
    name:string,
    email:string,
    password:string,
    Leetcode_username:string, 
    Codechef_username:string,
    Codeforces_username:string,
    Gfg_username:string
}
export default function SignUp(){
    const router = useRouter()
    const [loading,setLoading]=useState(false);
    function handleOnclick(){
        setLoading(true);
        axios.post("http://localhost:3000/api/user/signup",forminput).then(res=>{
            
            alert(res.data.msg);
            setLoading(false);
            if(res.data.status){
                router.push("/dashboard/contests")
                localStorage.setItem("token",res.data.token);
            }
           

        })
    }
    const [forminput,setFormput]=useState<forminput>({
        name:"",
        email:"",
        password:"",
        Leetcode_username:"",
        Codechef_username:"",
        Codeforces_username:"",
        Gfg_username:""
    })
    return(
        <div className="bg-black h-screen md:overflow-y-hidden">
                <div className='text-white flex  justify-center font-semibold pt-2'>
    Start your coding journey
  </div>
  <div className='text-white  flex pl-4 pb-2 text-4xl font-extralight'>
  &lt;/&gt;DevJourney.com
  </div>
  
  <div className="flex justify-center mt-12 pb-20">
  <div className="bg-black1-100 px-2 py-8 rounded-xl ">
    <div className=" text-white text-center text-4xl font-semibold">Sign Up</div>
    
   <form action={handleOnclick}>
   <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div>
        <div className="text-white text-md mt-4 mb-1">
            Email* 
        </div>
        <div><input type="email" required className="p-2 rounded-md w-64" onChange={(e)=>{
            setFormput({...forminput,email:e.target.value})
        }} name="" id="" placeholder='abc@gmail.com' /></div>
        </div>
        <div>
        <div className="text-white text-md mt-4 mb-1">
            Password*
        </div>
        <div><PasswordInput formInput={forminput} setFormput={setFormput}       /></div>
        </div>
        <div>
        <div className="text-white text-md mt-4 mb-1">
            Name*
        </div>
        <div><input type="text" onChange={(e)=>{
            setFormput({...forminput,name:e.target.value})
        }} required className="p-2 rounded-md w-64" name="" id="" placeholder='abc@gmail.com' /></div>
        </div>
        <div>
        <div className="text-white text-md mt-4 mb-1">
            Leetcode Username <Link href="https://leetcode.com/" className='text-sm text-hoverBlue-custom' target='_blank'>(Visit)</Link>
        </div>
        <div><input type="text" onChange={(e)=>{
            setFormput({...forminput,Leetcode_username:e.target.value})
        }} className="p-2 rounded-md w-64" name="" id="" placeholder='abc@gmail.com' /></div>
        </div>
        <div>
        <div className="text-white text-md mt-4 mb-1">
            Codechef Username <Link href="https://codechef.com/" className='text-sm text-hoverBlue-custom'  target='_blank'>(Visit)</Link>
        </div>
        <div><input type="text" onChange={(e)=>{
            setFormput({...forminput,Codechef_username:e.target.value})
        }} className="p-2 rounded-md w-64" name="" id="" placeholder='abc@gmail.com' /></div>
        </div>
        <div>
        <div className="text-white text-md mt-4 mb-1">
            Gfg Username <Link href="https://geeksforgeeks.org/" className='text-sm text-hoverBlue-custom'  target='_blank'>(Visit)</Link>
        </div>
        <div><input type="text" onChange={(e)=>{
            setFormput({...forminput,Gfg_username:e.target.value})
        }} className="p-2 rounded-md w-64" name="" id="" placeholder='abc@gmail.com' /></div>
        </div>
        <div>
        <div className="text-white text-md mt-4 mb-1">
            Codeforces Username <Link href="https://codeforces.com/" className='text-sm text-hoverBlue-custom'  target='_blank'>(Visit)</Link>
        </div>
        <div><input type="text" onChange={(e)=>{
            setFormput({...forminput,Codeforces_username:e.target.value})
        }} className="p-2 rounded-md w-64" name="" id="" placeholder='abc@gmail.com' /></div>
        </div>
        
    </div>
    <div className='text-white text-center mt-4 text-sm'>Already have an account?<Link href="/signin">Sign In</Link></div>
    <div className='flex justify-center'>
    <input type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4" value={loading ? "Loading..." : "Sign Up"} />
    </div>
   </form>
    
  </div>
  </div>



        </div>
    )
}