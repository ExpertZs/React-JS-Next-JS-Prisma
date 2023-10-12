import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    } 
    try {
        const prisma = new PrismaClient()
        const result = await prisma.post_comments.create({
           data: {  
            post_id:1,
            parent_id:1,
            title:"Fist post",
            published:11,       
            content:"4",
            }
          })
        console.log(result)
        return await  NextResponse.json({status:"success",data:result})
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
        //const result = await prisma.post_comments.findMany();
        //Read data with condition
        const result = await prisma.post_comments.findMany({
            where : {id: 2},
             select: {id:true, parent_id:true,  title:true, published:true, content:true}
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
        const result = await prisma.post_comments.delete({
            where : {id:3}
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
        const result = await prisma.post_comments.update({
            where : {id:2},
            data: {
                    title:"Testing Update",
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
   
