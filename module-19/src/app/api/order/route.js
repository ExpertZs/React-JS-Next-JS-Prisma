import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    }

    try {
        const prisma = new PrismaClient()
        const newOrder = await prisma.orders.create({
           data: {
            title: "A",
            sub_total: 5000,
            token: "string",
            item_discount: 200,
            tax: 200,
            total: 20000,
            discount: 200,
            grand_total: 200,
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
        console.log(newOrder)
        return await  NextResponse.json({status:"success",data:newOrder})
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
        //const result = await prisma.orders.findMany();

        //Read data with condition
        const result = await prisma.orders.findMany({
            where : {id: 1},
             select: {id:true, title : true,firstName:true , middleName:true, lastName:true, mobile:true, email:true, user_id:true,sub_total:true,token:true, tax:true, city:true, country:true,total:true,discount:true,grand_total:true,item_discount:true,}
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
        const result = await prisma.orders.delete({
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
        const result = await prisma.orders.update({
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
   