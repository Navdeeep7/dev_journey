import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import {Project, User,connectToDb} from "@/db"
import { headers } from 'next/headers';

export async function POST(req:NextRequest){
    const head=headers();
    const token = head.get('authorization');
    //@ts-ignore
   
    if (!token) { 
        return NextResponse.json({
            msg: "Authorization header missing",
            success: false,
            head:token
        });
    }
    const checkUser:any=jwt.verify(token,"secret");
    const email=checkUser.email;

    const body=await req.json();
    connectToDb();
    const user=await User.findOne({email:email});

    const project=await Project.create({
       
            Title:body.Title,
            Email:user.name,
            Description:body.Description,
            Tags:body.Tags,
            Project_link:body.Project_link,
            Github_link:body.Github_link
          
          
    })
    return NextResponse.json({
        msg: "Project created successfully",
        success: true,
    })

}


export async function GET(req:NextRequest){
    const head=headers();
    const token = head.get('authorization');
    //@ts-ignore
   
    if (!token) { 
        return NextResponse.json({
            msg: "Authorization header missing",
            success: false,
            head:token
        });
    }
    const checkUser:any=jwt.verify(token,"secret");
    const email=checkUser.email;


    connectToDb();
    const user=await User.findOne({email:email});
    const projects=await Project.find({Email:user.name});
    return NextResponse.json({
        msg: "Projects found successfully",
        project:projects
    })
    
}