import { NextResponse } from "next/server";

export function GET(request, {params}) {
    const {userId, postId} = params
    console.log(userId);
    console.log(postId);
    
  return (
    NextResponse.json(params)
  )
}
