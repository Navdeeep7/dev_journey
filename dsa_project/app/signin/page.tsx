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
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
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
        <div>

        <div className="relative  container mx-auto ">
      <input onChange={(e)=>{
        setSigninput({...signinInput,password:e.target.value});
      }}
        type={isPasswordVisible ? "text" : "password"}
        placeholder="12345678"
        className="w-full px-1 py-2 text-base border border-gray-300 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>
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