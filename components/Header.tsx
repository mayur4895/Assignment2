import { User } from '@prisma/client'
import React from 'react'
import { Button } from './ui/button'
import axios from 'axios'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
 
interface HeaderProps{
  user:User
}

const Header = ({user}:HeaderProps) => {
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
  return (
    <div className='  rounded-md p-4  px-10  flex justify-between'> 
    <h3>MS</h3>  
     <div className='flex items-center gap-5'> 
     <ModeToggle/>  
 
      <span>{user?.username}</span>
      <Button onClick={()=>{LogoutUser()}}>logout</Button>
    </div>
     </div>
  )
}

export default Header