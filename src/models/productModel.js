const mongoose = require("mongoose")

const producTschema = new mongoose.Schema({
    ProductName:{type:String,
                 required:true,
                 unique:true
                },
    ProductImage:{
                 type:String,
                 required:true,
                 unique:true
                 },
    ProductPrice:{
                type:Number,
                required:true
                 },
    ProductQuantity:{
                type:Number,
                required:true

    }
},{timestamps:true})

module.exports=mongoose.model("product",producTschema)