import mongoose from 'mongoose';

export async function connect() {

    try {
       mongoose.connect(process.env.mongodb_url!) ;
       const connection=mongoose.connection;

       connection.on('connected',()=>{
        console.log("Mongoose connected");
       })

       connection.on('error',(err)=>{
        console.log("Mongodb connetion error");
        process.exit()
       })

    } catch (error) {
        
    }
    
}