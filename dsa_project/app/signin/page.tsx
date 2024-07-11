"use client"
import Link from 'next/link'
import { useState } from 'react'
import axios from "axios";
import { useRouter } from 'next/navigation'
import PasswordInput from '@/components/password';
interface SignInput{
    email:string,
    password:string
}
export default function Signin(){
    const [loading,setLoading]=useState(false);
    const router=useRouter();
    const [signinInput,setSigninput]=useState<SignInput>({
        email: '',
        password: ''
    })
    function handleSignin(){
        setLoading(true)
        axios.post("https://dev-journey-zeta.vercel.app/api/user/signin",signinInput).then(res=>{
            alert(res.data.msg);
            setLoading(false)
            if(res.data.success){
                router.push("/dashboard/contests")
                localStorage.setItem("token",res.data.token);
            }
        })
    }
    return(
        <div className="bg-black h-screen"> 
                <div className='text-white flex  justify-center font-semibold pt-2'>
    Start your coding journey
  </div>
  <div className='text-white  flex pl-4 pb-2 text-4xl font-extralight'>
  &lt;/&gt;DevJourney.com
  </div>
  
  <div className="flex justify-center mt-16">
  <div className="bg-black1-100 px-2 py-8 rounded-xl ">
    <div className=" text-white text-center text-4xl font-semibold">Sign In</div>
    
    <form action={handleSignin}>
    <div>
        <div className="text-white text-md mt-4 mb-1">
            Email
        </div>
        <div><input type="email" onChange={(e)=>{
            setSigninput({...signinInput,email:e.target.value});
        }} className="p-2 rounded-md w-72" name="" id="" placeholder='abc@gmail.com' required/></div>
        <div className="text-white text-md mt-4 mb-1">
            Password
        </div>
        <div><PasswordInput formInput={signinInput} setFormput={setSigninput}/>
        </div>
    
    <div className='text-white text-center mt-4 text-sm'>Don&apos;t have an account?<Link href="/signup">Sign Up</Link></div>
    <div className='flex justify-center'>
    
    <input type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4" value={loading ? "Loading..." : "Sign In"} />
    </div>
    </div>
    </form>
  </div>
  </div>



        </div>
    )
}