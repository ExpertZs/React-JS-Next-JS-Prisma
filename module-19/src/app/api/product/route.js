import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    }

    try {
        const prisma = new PrismaClient()
        const newProduct = await prisma.products.create({
           data: {
            firstName:"Mobile", 
            metaTitle: "Phone",         
            slug :"aa",            
            summary  : "summary" ,            
            price    : 200 ,           
            discount  : 10  ,     
            user_id   : 1 ,            
              }
          })
        console.log(newProduct)
        return await  NextResponse.json({status:"success",data:newProduct})
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
        //const result = await prisma.products.findMany();

        //Read data with condition
        const result = await prisma.products.findMany({
            where : {id: 1},
             select: {id:true, firstName:true , metaTitle:true, slug:true, summary:true, price:true, discount:true,user_id:true,}
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
        const result = await prisma.products.delete({
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
        const result = await prisma.products.update({
            where : {id:3},
            data: {
                    metaTitle: "Mobile Phone",
                    slug: "product",
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
   