import { Request, Response } from "express";
import student from "../Model/student-model";
import { student_joi } from "../Validators/student-registration-joi";

export const addStudent = async (req: Request, res: Response): Promise<Response> => {
    // Validate the incoming request body
    const value = await student_joi.validateAsync(req.body);

    //check if user already exist
    const existinguser =await student.findOne({email:value.email})

    if(existinguser){
       return res.status(404).json({message:"user alreday exist"})
    }


    // Create a new student record using the validated data
    const newStudent = new student(value);

    // Save the student to the database
    const savedStudent = await newStudent.save();

    // Return a success response
    return res.status(201).json({
        message: "Student added successfully",
        data: savedStudent,
    });
};


export const allUser = async (req: Request, res: Response): Promise<Response> => {
   
     const allUser = await student.find()
     if(!allUser){
        return res.json({message:"No user found"})
     }

     return res.status(200).json({data:allUser})
}


