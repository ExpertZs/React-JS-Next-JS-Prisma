import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Transactions & Rollback
export async function POST(req,res) {
    BigInt.prototype.toJSON =function(){
        return this.toString();
    }

    try {
        const prisma = new PrismaClient()

        const last_user_id = await prisma.users.findFirst(
          {orderBy:{id:"desc"}}
      );
      const user_id_last=last_user_id.id+1n;
      // console.log(user_id_last)
        const createUser = prisma.users.create({
          data:{ firstName:"Md.", 
                      middleName: "Zahidul",         
                      lastName :"Islam",            
                      mobile  : "O1754898514" ,            
                      email    : "zs.engineer2@gmail.com" ,           
                      password  : "66146656"  ,     
                      admin        : "admin1" ,  }
        })

        const createProduct=prisma.products.create({
          data:{ firstName:"laptop",  
          metaTitle: "Phone",         
          slug :"bb",            
          summary  : "summary" ,            
          price    : 200 ,           
          discount  : 10  ,     
          user_id:user_id_last  }
        })

      const result=await prisma.$transaction([createUser, createProduct])
      console.log(result)
      return NextResponse.json({ status: "success", data: result });
      
       }
    
    catch(err){
       return NextResponse.json({status:"fail", data:err.toString()});
    }

}
//create new user

// export async function POST(req,res) {
//   BigInt.prototype.toJSON =function(){
//       return this.toString();
//   }

//   try {
//       const prisma = new PrismaClient()
//       const newUser = await prisma.users.create({
//          data: {
//           firstName:"Md.", 
//           middleName: "asadul",         
//           lastName :"Islam",            
//           mobile  : "O1754898514" ,            
//           email    : "said.engineer1@gmail.com" ,           
//           password  : "66146656"  ,     
//           admin        : "admin1" ,            
//             }
//         })
//       console.log(newUser)
//       return await  NextResponse.json({status:"success",data:newUser})
//      }
  
//   catch(err){
//      return NextResponse.json({status:"fail", data:err.toString()});
//   }

// }
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
   