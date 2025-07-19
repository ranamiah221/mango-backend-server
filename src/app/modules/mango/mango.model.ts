import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>({
    name:{type:String, trim:true, required:true},
    veriety:{type:String, trim:true, required:true},
    unit:{type:String, enum:["KG","TON"], default:"KG", required:true},
    price:{type:Number, min:0,required:true},
    stock:{type:Number, min:0,required:true},
    origin: { type: String, default: "Unknown" },
    season: { type: String, enum: ["Summer", "Winter"], default:"Summer", required: true },
},{
    timestamps:true
});

export const Mango = model<IMango>("Mango", mangoSchema);