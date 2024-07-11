import {User,connectToDb} from "@/db"
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from "jsonwebtoken";

export async function POST(req:NextRequest){
    const body=await req.json()
    if(body.password===""){
        return NextResponse.json({msg:"password is required",status:false})
    }
    connectToDb();
    
    const userExist=await User.findOne({email:body.email});
    if(userExist){
        
        return NextResponse.json({msg:"Email already exist",status:true});
    }
    const user= await User.create({
        email:body.email,
        password:body.password,
        name:body.name,
        Leetcode_username:body.Leetcode_username,
        Codechef_username:body.Codechef_username,
        Codeforces_username:body.Codeforces_username,
        Gfg_username:body.Gfg_username


    });
    const token=jwt.sign({userid:user._id},"secret");
    return NextResponse.json({
        token:token,
        msg:"User created successfully",
        status:true
    })


}