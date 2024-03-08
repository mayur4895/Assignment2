'use client'
import Header from '@/components/Header'
import Posts from '@/components/Posts'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { currentUser } from '@/lib/currentUser'
import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
 
import React, { useEffect, useState } from 'react'
const Home =   () => {
  const {toast} = useToast();
const router = useRouter();
 
const [data,setdata] = useState<User>();
 const getUserdata = async()=>{
    const UserData = await currentUser();
    if(!UserData){
      router.push("/login");
    }
   if(UserData){
    setdata(UserData);
   }
    
    
 }

 useEffect(()=>{
    getUserdata();
 },[])
 
 return(<> 
{           data && (
            <>
     
            <Header user={data} />
            <Posts/>
            </> 
     
  )}
 </>)
}
  

 
 
 
  
  
 

export default Home