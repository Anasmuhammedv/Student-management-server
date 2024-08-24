import mongoose from 'mongoose'

const batchSchema = new mongoose.Schema({

    Batchname:{
        type:String,
        required:true
    }

},{timestamps:true})

const batch = mongoose.model('batch',batchSchema)

export default batch