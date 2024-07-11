const {LeetCode} = require("leetcode-query");

const leetcode = new LeetCode();
import { headers } from 'next/headers';
import { NextRequest,NextResponse } from "next/server";
export async function GET(req:NextRequest){
    const head=headers();
    const username = head.get('userId');
    const user = await leetcode.user(username);
    return NextResponse.json({user:user});
}