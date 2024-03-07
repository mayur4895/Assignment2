import { db } from "@/lib/db";
 
import { NextResponse } from "next/server";

 

import bcryptjs from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();
       console.log(username, email, password);
       
    if (!username || !email || !password) {
      return NextResponse.json("Missing fields", { status: 400 });
    }

    const userExist = await db.user.findFirst({
      where: {
        email: email
      }
    });

    if (userExist) {
      return NextResponse.json("User already exists", { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    const user = await db.user.create({
      data: {
        username: username,
        email: email,
        password: hashpassword,
        
      }
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json("Error POST CREATING TASK", { status: 500 });
  }
}
 