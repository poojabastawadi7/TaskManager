import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//get one task
export async function GET(request, { params }) {
    const { taskId } = params;

    try {
       const task = await Task.findById(taskId);
       return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in getting task", 404, false)
    }
}

export async function PUT(request, { params }) {
    try {
        const { taskId } = params;

        const {title, content, status} = await request.json();
        let task = await Task.findById(taskId);

    (task.title = title),
    (task.content = content),
    (task.status = status)

    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);

    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in updating task", 404, false)
    }
} 

//delete one task
export async function DELETE(request, { params }) {
    const { taskId } = params ; //obj destruct
    try {
      await Task.deleteOne({
        _id : taskId,
      });

      return NextResponse.json({
        message : "user deleted successfully!",
        success : true,
      })
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in deleting task", 404, false)
      }
}

//4.06