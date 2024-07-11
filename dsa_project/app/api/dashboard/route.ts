import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import {User,connectToDb} from "@/db"
import { headers } from 'next/headers';
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
    if(checkUser){
        const userId=checkUser.userId;
        connectToDb();
        try{
            const user=await User.findOne({_id:userId});
        if(user){
            ;
            return NextResponse.json({msg:"Successfully logged in",
                user:user,
                success:true
            });
        }
        return NextResponse.json({
            msg:"invalid credentials",
            success:false
        })
        }
        catch(e){
            console.log(e);
            return NextResponse.json({
                msg:"Server error",
                success:false
            })
    
        }

    }
}