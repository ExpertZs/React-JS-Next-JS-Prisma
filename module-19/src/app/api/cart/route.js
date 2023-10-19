import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    }

    try {
        const prisma = new PrismaClient()
        const newCart = await prisma.carts.create({
           data: {
            title: "A",
            session_id: "string",
            token: "string",
            status: "string",
            firstName:"I", 
            middleName: " ",         
            lastName :"Phone",            
            mobile  : "O1754898514" ,            
            email    : "said.engineer1@gmail.com" ,           
            city  : "Dhaka"  , 
            country: "Bangladesh",   
            user_id        : 1 ,            
              }
          })
        console.log(newCart)
        return await  NextResponse.json({status:"success",data:newCart})
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
        //const result = await prisma.carts.findMany();

        //Read data with condition
        const result = await prisma.carts.findMany({
            where : {id: 1},
             select: {id:true, title : true,firstName:true , middleName:true, lastName:true, mobile:true, email:true, user_id:true,session_id:true,token:true, status:true, city:true, country:true,}
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
        const result = await prisma.carts.delete({
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
        const result = await prisma.carts.update({
            where : {id:3},
            data: {
                    mobile: "01642319326",
                    lastName: "Mobile",
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
   