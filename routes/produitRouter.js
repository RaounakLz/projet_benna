const express =require('express');
const produit = require("../models/produit");
const produitRouter =express.Router()

// ADD A NEW USER TO THE DATABASE 
produitRouter.post('/add',async(req,res)=>{
    try {
        const newproduit = new produit(req.body)
        let result = await newproduit.save()
        res.send({produit:result, msg:'produit added successfully'})
    } catch (error) {
        console.log(error)
    }
})
// RETURN ALL USERS
produitRouter.get("/",async(req,res)=>{
    try{
        let result = await produit.find();
        res.send({produit:result,msg:'all products'});
    }catch(error){
    console.log(error);
    }
    })
    // RETURN USER BY ID
    produitRouter.get("/:id",async(req,res)=>{
        try{
            let result = await produit.findById({_id:req.params.id});
            res.send({produit:result,msg:'produit'});
        }catch(error){
        console.log(error);
        }
    })
    // REMOVE A USER BY ID 
    produitRouter.delete("/:id",async(req,res)=>{
        try{
            let result = await produit.findByIdAndDelete({_id:req.params.id});
            res.send({msg:'product deleted'});
        }catch(error){
        console.log(error);
        }
    })
    //EDIT A USER BY ID  
    produitRouter.put("/:id",async(req,res)=>{
        try{
            let result = await produit.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
            res.send({msg:'product updated'});
        }catch(error){
        console.log(error);
        }
    })
module.exports=produitRouter;