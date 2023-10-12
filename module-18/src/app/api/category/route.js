import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    } 
    try {
        const prisma = new PrismaClient()
        const result = await prisma.categories.create({
           data: { 
            parent_id:1, 
            title:"Facebook",  
            metaTitle:"post",
            slug:"love",       
            content:"dfadf asd asdf fasd asdfasdfaf f",            
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
        //const result = await prisma.categories.findMany();
        //Read data with condition
        const result = await prisma.categories.findMany({
            where : {id: 2},
             select: {id:true, parent_id:true,  title:true, metaTitle:true, slug:true, content:true}
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
        const result = await prisma.categories.delete({
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
        const result = await prisma.categories.update({
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
   
