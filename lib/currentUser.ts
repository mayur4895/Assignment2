import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "./db";
import { redirect } from "next/navigation";
import axios from "axios";

export async function currentUser(){ 
  
    try {
        const res = await axios.get('/api/auth');
       return res.data.user
        
       } catch (error) {
        console.log(error); 
       }

    }  