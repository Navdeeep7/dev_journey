import { NextRequest, NextResponse } from "next/server";
import { Project, connectToDb } from "@/db";

export async function GET(req: NextRequest) {
  await connectToDb();

  const headers = new Headers();

  // Prevent caching by setting explicit headers
  headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  headers.set('Pragma', 'no-cache');
  headers.set('Expires', '0');
  
  if (process.env.NODE_ENV !== 'production') {
    headers.delete('ETag');
  }

  const projects = await Project.find();

  return NextResponse.json(projects, { headers });
}
