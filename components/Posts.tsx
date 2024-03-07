import React, { use, useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { AiFillLike } from "react-icons/ai";
const Posts = () => {
const [posts,setposts] = useState<never[] | any>([]);
const [comments,setcomments] = useState<never[] | any>([]);
const [isloding,setisloding] = useState(false);




 async function fetchBlogPosts() {
 

const options = {
  method: 'GET',
  url: 'https://programmer-humor.p.rapidapi.com/api/9gag',
  params: {after: '5'},
  headers: {
    'X-RapidAPI-Key': '8a6481214amshac79cac3977c5b9p1df487jsn9ac6cc04ff46',
    'X-RapidAPI-Host': 'programmer-humor.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	 setposts(response.data);
} 
  catch (error) {
    setisloding(false);
    console.error('Error fetching blog posts:', error);
    return [];
  }finally{
    setisloding(false);
  }
}
console.log(comments);

 
useEffect(() =>{
  
 fetchBlogPosts();
  
 },[]);
 
 console.log(posts);
 

 if(isloding){
  return (
    <div className='flex justify-center items-center h-[80vh] w-full'>
 <div className='flex items-center justify-center flex-col gap-3'>
 <Loader2 className=' animate-spin'/>
 <span className='text-gray-500'>posts loding...</span>
 </div>

    </div>
  )
 }

  return (
    <div className='px-10'> 
    <h2 className='text-3xl'>Posts</h2><br />
    
    <div className=' flex gap-3 flex-col'>
 
   {
    posts.map((post:any,index:any)=>{ 
        return(
    
            <div key={index}>
                <Card className="p-5  w-full border-none ">
                  <CardContent>
                  <CardHeader className="p-0 mb-4">
                    <span>{post?.email}</span>
                        <CardTitle className="text-xl">{post?.title}</CardTitle> 
                    </CardHeader>
                    <a href={post.url}> 
                    <Image className=' h-auto w-auto' alt="thumbnail" src={post.thumbnail} height={200} width={400} />
                    </a>
                    <CardFooter className="p-0"> 
                    <div className='flex flex-col '>
 
 <span className='flex gap-2 items-center'><AiFillLike /> {post.upvotes}</span>
 <span className=''>{ (new Date(post.posted)).toLocaleString() }</span> 
   
  </div>
                    </CardFooter>
                  </CardContent>
                </Card>
                <div>
  
              
                </div>
                
            </div>
         
        )
    })
   }  

    </div>
    </div>
  )
}

export default Posts