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
const [comments,setcomments] = useState<never[] | any>([]);
// In your Next.js component or API route:
async function fetchBlogPosts() {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    
 
      const result = [];
      for (let i = 1; i <= 100; i++) {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${i}/comments`
        );
          result.push(response);
      }
     setcomments(result);
   
 
 
 
    setposts(response.data);
    return response.data; // An array of blog post objects
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
console.log(comments);

 
useEffect(() =>{
  
 fetchBlogPosts();
  
 },[]);
 console.log(posts);
 

  return (
    <div className='px-10'> 
    <h2 className='text-3xl'>Posts</h2><br />
    <div className=' flex gap-3 flex-col'>
 
   {
    posts.map(  (post:any,index:any)=>{

     
        return(

            <div key={index}>
                <Card className="p-5  w-full ">
                  <CardContent>
                  <CardHeader className="p-0 mb-4">
                    <span>{post?.email}</span>
                        <CardTitle className="text-xl">{post?.title}</CardTitle>
                        <CardDescription className='max-w-2xl'>{post?.body} </CardDescription>

                    </CardHeader>
                    <CardFooter className="p-0"> 
                    
                    </CardFooter>
                  </CardContent>
                </Card>
                <div>
 <div className='flex flex-col '>
  <span className='text-gray-400'>Comments</span>
  {
    comments[index].data.map((comment:any,index:any)=>{
      return(<>
      <div className=' flex flex-col gap-2'>
 <span className='text-blue-500'>      {comment.email}</span>
    <span className='text-sm text-gray-600'>   {comment.name}</span>  
   <span className='text-xs text-gray-600'>    {comment.body}</span> <br />
   
      </div>
      </>)
    })
  }
  </div>
              
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