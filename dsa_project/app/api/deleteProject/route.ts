import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import {Project, User,connectToDb} from "@/db"
import { headers } from 'next/headers';
export async function POST(req:NextRequest){
    const body=await req.json();
await connectToDb();
    await Project.deleteOne({_id:body.projectId});
    return NextResponse.json({
        message: "Project deleted successfully",
    })
}