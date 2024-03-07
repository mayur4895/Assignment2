'use client'
import Header from '@/components/Header'
import Tasks from '@/components/Todos'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { currentUser } from '@/lib/currentUser'
import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
 
import React, { useEffect, useState } from 'react'

const Posts = () => {
const {toast} = useToast();
const router = useRouter();
  const LogoutUser = async()=>{
    try {
       await axios.get('/api/user/logout');
       toast({
         variant:"success",
         title: "Logout Success",
         description: "you are now signed out",
       })
       router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }
const [data,setdata] = useState<User>();
 const getUserdata = async()=>{
    const UserData = await currentUser();
    if(!UserData._id){
      router.push("/login");
    }
   if(UserData){
    setdata(UserData);
   }
    
    
 }

 useEffect(()=>{
    getUserdata();
 })
 
  return (
          <>
          <Button onClick={()=>{LogoutUser()}}>LOGOUT</Button>
           {data && (
            <>
            
            <Header  user={data}/>
         
            </>
           )}
          </>
  )
}

export default Posts