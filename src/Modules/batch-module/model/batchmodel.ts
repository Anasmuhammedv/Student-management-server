import mongoose, { Mongoose } from 'mongoose'

const batchSchema = new mongoose.Schema({

    Batchname:{
        type:String,
        required:true
    },
    students:[{
       type:mongoose.Schema.ObjectId,
       ref:"student"
    }]

},{timestamps:true})

const batch = mongoose.model('batch',batchSchema)

export default batch