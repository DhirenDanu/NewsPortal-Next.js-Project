import Image from 'next/image'
import React from 'react'
import banner from "../assets/banner.jpg"
import { Button } from './ui/button'
const Banner = () => {
  return (
    <div>
      <section className='bg-gray-100   my-10    py-10'>
        <div className='max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8'>
            <div className='w-full'>
                  <Image src={ banner} alt=" " className='w-full h-auto objext-cover rounded-sm'></Image>
            </div>
            {/* Content */}
           <div>
              <h2 className='text-3xl font-bold'>Technology</h2>
              <h4 className='text-2xl '> OpenAi is  innovations push the boundaries of artificial intelligences.  </h4><br/>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto laudantium, vero quisquam commodi placeat dolorem. Possimus ad minima deserunt fugiat odit, tempora delectus in id quas placeat voluptas! Alias!   </p>
               <Button className=' my-3 rounded-2xl bg-black/10'>ReadMore</Button>
           </div>
          
        </div>
      </section>
    </div>
  )
}

export default Banner
