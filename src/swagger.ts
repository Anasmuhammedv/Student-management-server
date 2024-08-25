import swaggerAutogen from "swagger-autogen";


const doc = {
    info:{
        title:"Student mangement API",
        description:"Api for managing student in tution center",
    },
    host:"localhost:7907",
    schemes:["http"]
}

const outputfile ="./swagger-output.json";
const endpointfiles =["./routes/*.ts"];


(async()=>{
    try {
        await swaggerAutogen(outputfile,endpointfiles,doc)
        console.log("swagger documentation generated successfully");
        
    } catch (error) {
        console.error("error occured0",error)
    }
})();