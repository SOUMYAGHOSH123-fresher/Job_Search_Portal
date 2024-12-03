import mongoose from "mongoose";
import colors from 'colors';

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTAL_WITH_AUTOMATION"
    }).then(()=>{
        // console.log("Connected to database.")
        console.log(`Connect to dstabase ${mongoose.connection.host}`.bgMagenta.white);
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    })
}