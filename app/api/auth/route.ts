// pages/api/auth/user.js
import { db } from '@/lib/db';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
 
export   async function GET(Request:NextRequest) {
  try {
    const token = Request.cookies.get('token')?.value;  
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' });
    }
 
     
 
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY!); 
    const userId = decodedToken.sub; 

 
    const user = await  db.user.findFirst({ where: { id: userId?.toString() } });

    if (!user) {
      return NextResponse.json({ error: 'User not found' },{status:400});
    }

     return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Internal server error' },{status:500});
  }
}
