import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    }

    try {
        const prisma = new PrismaClient()
        const newUser = await prisma.users.create({
           data: {
            firstName:"Md.", 
            middleName: "saidul",         
            lastName :"Islam",            
            mobile  : "O1754898514" ,            
            email    : "said.engineer1@gmail.com" ,           
            passwordHash  : "66146656"  ,     
            intro        : "hi I am a software engineer" ,       
            profile    :   "https://www.facebook.com/said.7/" ,      
              }
          })
        console.log(newUser)
        return await  NextResponse.json({status:"success",data:newUser})
       }
    
    catch(err){
       return NextResponse.json({status:"fail", data:err.toString()});
    }

}
