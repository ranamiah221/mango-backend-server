import {Server} from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server:Server



const startServer = async()=>{
    try{
     await mongoose.connect(envVars.DB_URL)
     console.log("connected to db");
     server= app.listen(envVars.PORT, ()=>{
        console.log(`Server is running port: ${envVars.PORT}`)
     })
    }catch(err){
        console.log(err);
    }
}
startServer()

process.on("unhandledRejection",()=>{
    console.log("Unhandled Rejection detected...Server shutting down");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1)
})
process.on('uncaughtException', (err) => {
    console.log('Unhandled uncaughtException detected...Server shutting down.', err);
    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }
    process.exit(1)
})

process.on('SIGTERM', () => {
    console.log('Unhandled SIGTERM detected...Server shutting down.');
    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }
    process.exit(1)
})

process.on('SIGINT', () => {
    console.log('Unhandled SIGINT detected...Server shutting down.');
    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }
    process.exit(1)
})