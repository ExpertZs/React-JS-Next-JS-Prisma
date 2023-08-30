import { NextResponse } from 'next/server'

export async function POST(req,res) {

    return NextResponse.json({message:"Welcome to our API!",version:"1.0"})
}

 
