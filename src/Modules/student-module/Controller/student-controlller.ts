import { Request, Response } from "express";
import student from "../Model/student-model";
import { student_joi } from "../Validators/student-registration-joi";


export const addStudent = async (req: Request, res: Response): Promise<Response> => {

    //validate using joi
    const value = await student_joi.validateAsync(req.body);

    //check if user already exist
    const existinguser =await student.findOne({email:value.email})
    if(existinguser){
       return res.status(400).json({message:"user alreday exist"})
    }


    // Save the student to the database
    const newStudent = new student(value);
    const savedStudent = await newStudent.save();

    // Return a success response
    return res.status(201).json({
        message: "Student added successfully",
        data: savedStudent,
    });
};


//intrface for user data

interface StudentData {
    email: string;
    name: string;
    password: string;
}

//Fetch all user

export const allUser = async (req: Request, res: Response): Promise<Response> => {
   
     const allUser:StudentData|{} = await student.find()

     if(!allUser){
        return res.json({message:"No user found"})
     }

     return res.status(200).json({data:allUser})
}

//fetch userById

export const viewStudentById = async(req:Request,res:Response):Promise<Response> => {

    const id:String = req.params.id
    const oneUser:StudentData|null = await student.findById(id)

    if(!oneUser){
        return res.status(404).json({message:'no user found in this id'})
    }

    return res.status(200).json({data:oneUser})
}
