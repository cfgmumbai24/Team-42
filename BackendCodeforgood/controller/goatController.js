import express from 'express';
import GoatModel from "../models/goat.js";


export const goatRegister=async(req,res)=>{
    try{
        const { beneficiary_name, phone, goat_id, goat_age, goat_height, goat_weight, vaccination,infants } = req.body;
        if(!beneficiary_name || !phone  || !goat_id || !goat_age || !goat_height || !goat_weight)
            {
                return res.status(500).json({success: false,message: "Enter all details"});
            }
            const newGoat = new GoatModel({
                beneficiary_name,
                phone,
                goat_id,
                goat_age,
                goat_height,
                goat_weight,
                vaccination,
                infants
            });
            await newGoat.save();
           return res.status(200).json({ message: 'Goat added successfully' });
    }
    catch(error)
    {
       return res.status(500).json({ message: 'Failed to add goat', error: error.message });
    }
}