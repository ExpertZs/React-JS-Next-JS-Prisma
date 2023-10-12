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
export async function GET(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    }

    try {
        const prisma = new PrismaClient()
        //Read all data
        //const result = await prisma.users.findMany();

        //Read data with condition
        const result = await prisma.users.findMany({
            where : {email: "zs.engineer1@gm"},
             select: {id:true, email : true,firstName:true , middleName:true, lastName:true, mobile:true, email:true, profile:true,intro:true,}
        }
        );
        console.log(result)
        return await  NextResponse.json({status:"success", data:result})
       }
    
    catch(err){
       return NextResponse.json({status:"fail", data:err.toString()});
    }

}

export async function DELETE(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    }

    try {
        const prisma = new PrismaClient()
        const result = await prisma.users.delete({
            where : {id:2}
        }
        );
        console.log(result)
        return await  NextResponse.json({status:"success", data:result})
       }
    
    catch(err){
       return NextResponse.json({status:"fail", data:err.toString()});
    }

}
     
export async function PUT(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    }

    try {
        const prisma = new PrismaClient()
        const result = await prisma.users.update({
            where : {id:3},
            data: {
                    mobile: "01642319326",
                    profile: "https://www.facebook.com/amzad.7/",
                    intro:"Engineer",
                  },
        }
        );
        console.log(result)
        return await  NextResponse.json({status:"success", data:result})
       }
    
    catch(err){
       return NextResponse.json({status:"fail", data:err.toString()});
    }

}
   
