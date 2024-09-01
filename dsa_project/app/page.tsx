
import Link from 'next/link'

import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className='bg-black h-screen overflow-hidden relative'>
  <div className='text-white flex  justify-center font-semibold pt-2'>
    Start your coding journey
  </div>
  <div className='text-white relative flex pl-4 pb-2 text-4xl font-extralight z-10'>
  &lt;/&gt;DevJourney.com
  </div>
  <div className=' relative  '>
    <div className='h-screen  bg-black'>
    <Spline className='hidden md:block'
        scene="https://prod.spline.design/HebvSUgFe4zNf0rF/scene.splinecode" 
      /> 
    </div>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  z-10 grid  grid-cols-1 md:grid-cols-2 w-screen  ' >
    <div className='p-4 w-5/6 bg-black ml-2 rounded-xl border-black md:bg-transparent md:ml-0'>
    <div className='text-4xl md:text-6xl  font-bold'>
    Embark on Your
      Coding Journey
    </div>
    <div className='text-lg pt-4'>
    DevJourney is your companion on the path to becoming a skilled developer. Discover resources, tips, and community support to navigate your coding adventure.
    </div>
   <Link href="/dashboard/platformRatings"> <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 mt-4">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Explore DevJourney
</span>
</button></Link>
    </div>
    <div className='text-white text-4xl font-light flex justify-end relative mr-16 hidden md:flex'>
      <div className=' p-4 rounded-3xl '>
        <div className='pl-6'>
          What we offer
        </div>
      <div className='p-4 text-xl hover:bg-white hover:text-black'>
      &gt;Coding Contests
      </div>
      <div className='p-4 text-xl hover:bg-white hover:text-black'>
      &gt;Job Listings
      </div>
      <div className='p-4 text-xl hover:bg-white hover:text-black'>
      &gt;User Stats
      </div>
      <div className='p-4 text-xl hover:bg-white hover:text-black'>
      &gt;Coding Challenges
      </div>
      </div>
      
    </div>
    
    </div>
  </div>
</main>
  );
}
