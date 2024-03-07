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
  
const Posts = () => {
const [posts,setposts] = useState<never[] | any>([]);
// In your Next.js component or API route:
async function fetchBlogPosts() {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
 
 
    setposts(response.data);
    return response.data; // An array of blog post objects
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

 
useEffect(() =>{
  
 fetchBlogPosts();
  
 },[]);
 

  return (
    <div className='px-10'> 
    <h2 className='text-3xl'>Posts</h2>
    <div className=' flex gap-3 flex-col'>
 
   {
    posts.map((post:any,index:any)=>{
        return(
            <div key={index}>
                <Card className="p-5 max-w-2xl w-full">
                  <CardContent>
                  <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl">{post?.title}</CardTitle>
                        <CardDescription>{post?.body} </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-0"> 
                         <a href={post?.url} target="_blank" rel="noreferrer">Read More</a>
                    </CardFooter>
                  </CardContent>
                </Card>
            </div>
        )
    })
   }  

    </div>
    </div>
  )
}

export default Posts