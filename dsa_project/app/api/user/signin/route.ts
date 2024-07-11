import {User} from "@/db"
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from "jsonwebtoken";

export async function POST(req:NextRequest){
    const body=await req.json()
    if(body.password===""){
        return NextResponse.json({msg:"password is required",
            success:false})
    }
    
    
    try{
        const user=await User.findOne({email:body.email,password:body.password});
    if(user){
        const token=jwt.sign({userId:user._id},"secret");
        return NextResponse.json({msg:"Successfully logged in",
            token:token,
            success:true
        });
    }
    return NextResponse.json({
        msg:"invalid credentials",
        success:false
    })
    }
    catch(e){
        console.log(e);
        return NextResponse.json({
            msg:"Server error",
            success:false
        })

    }
    


}