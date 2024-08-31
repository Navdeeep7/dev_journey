import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import {User,connectToDb} from "@/db"
import { headers } from 'next/headers';
import axios from "axios";
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
    if(checkUser.userId){
        const userId=checkUser.userId;
       
        connectToDb();
        try{
            
            const user=await User.findOne({_id:userId});
            
            
        if(user){
           var userName=user.Codeforces_username;
         
            var userData=await axios.get(`https://codeforces.com/api/user.info?handles=${userName}&checkHistoricHandles=false`);
                
           if(userData.data){
            return NextResponse.json({
                success:true,
                userData:userData.data,
            })
           }
            
            
        }
        
       
        }
        catch(e){
            const user=await User.findOne({_id:userId});
            console.log(e);
            return NextResponse.json({
                userData:e,
                success:false
            })
    
        }

    }
    return NextResponse.json({
        msg:checkUser,
        success:false
    })
    
}