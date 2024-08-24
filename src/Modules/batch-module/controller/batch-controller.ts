import { Request, Response } from "express";
import batch from "../model/batchmodel";

// Add new batch
const newBatch = async (req: Request, res: Response): Promise<Response> => {
    const { Batchname } = req.body;

    const existingBatch = await batch.find({Batchname})

    if(existingBatch){
        return res.status(409).json({messsage:"batch alreday found"})
    }

        const newBatch = new batch({ Batchname });
        await newBatch.save();

        return res.json({ data: newBatch });
   
};

export default newBatch;
