import { NextResponse } from "next/server";

export async function GET(req,res){
  const {searchParams}=new URL(req.url);
  let ToEmail= searchParams.get("email")

  // Transporter
  let Transporter=nodemailer.createTransport(transporter:{
    host:"mail.google.com",
    port: 25,
    secure: false,
    auth:{
      user:"zs.engineer1@gmail.com",
      pass:' '
    },
    tls:{rejectUnauthorized: false}
  })

  // Prepare Email
  let myEmail={
    form:"Test Email From Module 14 assignment<zs.engineer1@gmail.com>",
    to: ToEmail,
    subject:"Test Email"
    text:"Test Email from module 14 assignment"
  }
  try{
    await Transporter.sendMail(myEmail);
    return NextResponse.json(body:{msg:"Success"})
  }
  catch (e){
    return NextResponse.json(body:{msg:"Fail"})
  }
}
