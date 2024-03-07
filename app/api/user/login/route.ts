import { db } from "@/lib/db"; 
import { NextResponse } from "next/server";  
import bcryptjs from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
 

export async function POST(req: Request) {
  try {
    const {email, password } = await req.json();
    
       
    if ( !email || !password) {
      return NextResponse.json("Missing fields", { status: 400 });
    }

    const userExist = await db.user.findUnique({
      where: {
        email: email
      }
    });


    if(userExist) {
      
      const verifiedPassword =    await bcryptjs.compare(password,userExist.password);

         if(!verifiedPassword){
            return NextResponse.json("Invalid password", { status: 400 });
         }
 
         const tokendata = {
            username: userExist.username,
            id: userExist.id,
            email: userExist.email,  
            isVerified: userExist.isVerified, 
         }

         const token = jwt.sign(tokendata, process.env.JWT_SECRET_KEY!, {
            algorithm: 'HS256',
            expiresIn: '1d',
          });

          const response =   NextResponse.json({
             message:"Verified password",
             status:true
          })
          

          response.cookies.set("token",token,{
            httpOnly: true,
            
          });
  
          return response;
    }
    
 
 
    
  } catch (error) {
    return NextResponse.json("Error POST CREATING TASK", { status: 500 });
  }
}

 