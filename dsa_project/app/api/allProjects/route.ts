import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import {Project, User,connectToDb} from "@/db"
import { headers } from 'next/headers';

export async function GET(req:NextRequest){
    await connectToDb();
    const headers = new Headers();
    headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    headers.set('Pragma', 'no-cache');
    headers.set('Expires', '0');
    const projects=await Project.find();
    return NextResponse.json(projects);
}