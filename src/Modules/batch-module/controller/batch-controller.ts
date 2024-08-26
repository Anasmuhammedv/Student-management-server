import { Request, Response } from "express";
import batch from "../model/batchmodel";
import student from "../../student-module/Model/student-model";
import mongoose from "mongoose";


// Add new batch
export const newBatch = async (req: Request, res: Response): Promise<Response> => {
    const { Batchname } = req.body;

    const existingBatch = await batch.findOne({Batchname:Batchname})

    if(existingBatch){
        return res.status(409).json({messsage:"batch alreday found"})
    }

        const newBatch = new batch({ Batchname });
        await newBatch.save();

        return res.json({ data: newBatch });
   
};




//add student to batch


// export const addStudent = async (req: Request, res: Response): Promise<Response> => {
//     const userId: string = req.body.id;
//     const batchId: string = req.params.id;

   
//         const studentData = await student.findById(userId);
//         if (!studentData) {
//             return res.status(404).json({ message: "Student not found" });
//         }

    
//         const batchData = await batch.findByIdAndUpdate(batchId, { $addToSet: { students: studentData._id } }, { new: true });

        

//         if (!batchData) {
//             return res.status(404).json({ message: "Batch not found" });
//         }

       

//         return res.status(200).json({ message: "Student successfully added to batch", batch: batchData });
    
// };


//add new student 

export const addStudent = async (req: Request, res: Response): Promise<Response> => {
    const { id: studentId } = req.body;
    const { id: batchId } = req.params;

  
        // Check if the student exists
        const studentData = await student.findById(studentId);
        if (!studentData) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Check if the student is already in any batch
        const isStudentInAnyBatch = await batch.exists({
            students: studentData._id
        });

        if (isStudentInAnyBatch) {
            return res.status(409).json({ message: "Student is already in another batch" });
        }

        // Find the specific batch and add the student
        const updatedBatch = await batch.findByIdAndUpdate(
            batchId,
            { $addToSet: { students: studentData._id } }, 
            { new: true }
        );

        if (!updatedBatch) {
            return res.status(404).json({ message: "Batch not found" });
        }

        return res.status(200).json({ message: "Student successfully added to batch", batch: updatedBatch });
     
};



//Get student details in eachbatch



export const studentBatch = async (req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id;

    const batchData = await batch.findById(id).populate({
        path: 'students' 
    });

    if(!batchData){
        return res.status(404).json({message:"no batch found in this id"})
    }
    

    return res.json(batchData);
};
