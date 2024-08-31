import { NextRequest, NextResponse } from "next/server";
import { Project, User, connectToDb } from "@/db";
import crypto from 'crypto';

export async function GET(req: NextRequest) {
  await connectToDb();
  const headers = new Headers();
  headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  headers.set('Pragma', 'no-cache');
  headers.set('Expires', '0');
  const project = await Project.find();
  const timestamp = new Date().getTime(); // include a timestamp in the data
  const projects = { project, timestamp };
  const dataHash = crypto.createHash('sha256').update(JSON.stringify(projects)).digest('hex');
  headers.set('ETag', `"${dataHash}"`);
  headers.set('Last-Modified', new Date().toUTCString());
  return NextResponse.json(projects);
}