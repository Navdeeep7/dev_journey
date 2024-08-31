import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import {Project, User,connectToDb} from "@/db"
import { headers } from 'next/headers';

export async function GET(req:NextRequest){
    connectToDb();
    const projects=await Project.find();
    return NextResponse.json(projects);
}