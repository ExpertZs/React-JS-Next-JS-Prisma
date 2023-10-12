import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    } 
    try {
        const prisma = new PrismaClient()
        const result = await prisma.posts.create({
           data: {            
            author_id:1,             
            parent_id:1,             
            title:"Fist post",                
            metaTitle:"new post",           
            slug:"a",                
            summary:"b",              
            published:11,            
            content:"d",       
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
        //const result = await prisma.posts.findMany();
        //Read data with condition
        const result = await prisma.posts.findMany({
            where : {id: 1},
             select: {id:true, author_id:true, parent_id:true, title:true, metaTitle:true, slug:true, summary:true, published:true, content:true}
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
        const result = await prisma.posts.delete({
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
        const result = await prisma.posts.update({
            where : {id:2},
            data: {
                    metaTitle:"Testing Update",
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
   
