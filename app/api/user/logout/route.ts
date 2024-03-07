import { NextResponse } from "next/server";


export async function GET(){
 try{
    const res = NextResponse.json({
        message:"Logout Successful",
        success:true
    })
    res.cookies.set("token","",{httpOnly:true ,expires:Date.now()})
    return res;

 }catch(err){
    return NextResponse.json(err);
 }
}