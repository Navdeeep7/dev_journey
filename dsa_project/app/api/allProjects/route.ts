import { NextRequest, NextResponse } from "next/server";

import { Project, User, connectToDb } from "@/db";

import crypto from 'crypto';

export async function GET(req: NextRequest) {
  await connectToDb();
  const headers = new Headers();
  headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  headers.set('Pragma', 'no-cache');
  headers.set('Expires', '0');
  const projects = await Project.find();
  const dataHash = crypto.createHash('sha256').update(JSON.stringify(projects)).digest('hex');
  headers.set('ETag', `"${dataHash}"`);
  headers.set('Last-Modified', new Date().toUTCString());
  return NextResponse.json(projects);
}