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
            firstName:"Md.", 
            middleName: "saidul",         
            lastName :"Islam",            
            mobile  : "O1754898514" ,            
            email    : "said.engineer1@gmail.com" ,           
            password  : "66146656"  ,     
            admin        : "admin1" ,            
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
            where : {email: "said.engineer1@gmail.com"},
             select: {id:true, email : true,firstName:true , middleName:true, lastName:true, mobile:true, email:true, admin:true,password:true,}
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
                    mobile: "01642319326",
                    lastName: "khan",
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
   