import { NextResponse } from 'next/server'

export async function POST(req,res) {

    return NextResponse.json(
        {status:true,message:"Cookie add successfully"},
        {
            status: 200,
            headers: { 'Set-Cookie': `theme: dark; language: en; Path=/` },
        }
    )
}

