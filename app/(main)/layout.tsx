'use client'


 
import React from 'react'

const Mainlayout = ({children}:{children:React.ReactNode}) => {
  return (
  <div >
       
   <main className='m-5  h-full  z-30 flex-col inset-y-0 pl-[40px]  md:pl-[275px]'>
   {children}
   </main>
 
  </div>
    
   
  )
}

export default Mainlayout