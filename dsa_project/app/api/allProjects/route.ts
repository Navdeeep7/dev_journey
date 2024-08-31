import { NextRequest, NextResponse } from "next/server";

import { Project, User, connectToDb } from "@/db";



export async function GET(req: NextRequest) {
  await connectToDb();
 const headers=new Headers();
  if (process.env.NODE_ENV !== 'production') {
    headers.delete('ETag');
  }
  const projects = await Project.find();
  
  return NextResponse.json(projects);
}