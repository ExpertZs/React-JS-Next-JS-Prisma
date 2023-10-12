import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    } 
    try {
        const prisma = new PrismaClient()
        const result = await prisma.post_tags.create({
           data: {  
            post_id:1,  
            tag_id:1,
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
        //const result = await prisma.post_tags.findMany();
        //Read data with condition
        const result = await prisma.post_tags.findMany({
            where : {post_id: 2},
             select: {post_id:true, tag_id:true}
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
        const result = await prisma.post_tags.delete({
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
        const result = await prisma.post_tags.update({
            where : {post_id:2},
            data: {
                    tag_id:22,
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
   
