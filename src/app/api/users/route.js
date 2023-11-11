import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {

    let users = [];

    try {
       users = await User.find().select("-password");
    }
    catch(error) {
      console.log(error);
      return NextResponse.json({
        message : "failed to get the users",
        success : false
      })

    }
  return (
    NextResponse.json(users)
  )
}


export async function POST(request) {
    const {name, email, password, about, profileUrl} = await request.json();
    console.log({name, email, password, about, profileUrl});

    
    try{

      //save the obj to database
      const user = new User({
        name, email, password, about, profileUrl
      })
  
      const createdUser = await user.save();
  
      const response = NextResponse.json(user, {
        status : 201,
      })
  
      return response ;
  
    } 
    catch(error){
      console.log(error);
      return NextResponse.json({
        message : "failed to create the user",
        status : false
      })
    }
}

export  function DELETE(request) {
    console.log('Delete api called');

  return (
    NextResponse.json(
        {
            message : "deleted !",
            status : true,
        },
        {
            status : 201,
            statusText : "changed Text"
        }
    )
  )
}



