import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.headers.authorization) {
    const token = req.headers.authorization;

    const newAuthorizationHeader = `Bearer ${token}`;

    const response = NextResponse.next();
    response.headers.set('Authorization', newAuthorizationHeader);

    return response;
  }

  return NextResponse.next();
}
