import { User } from "@/models/user";
import { NextResponse } from "next/server";

//Get  a user
export async function GET(request, {params}) {

 
  const { userId } = params ; //obj destruct
 //  console.log("user id is ", userId);
 
   const user = await User.findById(userId).select("-password");

   return NextResponse.json(user)
  }

//Delete user
export async function DELETE(request, {params}) {

     console.log(params);

    // const UserId = params.userId ; 
    // console.log("user id is ", UserId);
    
     const { userId } = params ; //obj destruct
    //  console.log("user id is ", userId);
    try {
      await User.deleteOne({
        _id : userId,
      });

      return NextResponse.json({
        message : "user deleted successfully!",
        success : true,
      })
    } catch (error) {
      return NextResponse.json({
        message : "Error in deleting user !!",
        success : false,
      })
    }
  }
    //updating user

    export async function PUT(request, { params }) {

      const {userId} = params;

      const {name, email, password, about, profileUrl} = await request.json();

     try {
      const user =await User.findById(userId);

      user.name = name;
      user.email = email;
      user.password = password;
      user.about = about;
      user.profileUrl = profileUrl;

      const updatedUser = await user.save();

      return NextResponse.json(updatedUser);
     } catch (error) {
        return NextResponse.json({
          message : "Error in deleting user !!",
          success : false,
      })
     }
    }
     
     





