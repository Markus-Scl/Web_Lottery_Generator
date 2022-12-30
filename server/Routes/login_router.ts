import express from "express";
import bcrypt from "bcrypt"
import jwt from "jwt-simple"
import { User } from "../Entities/user";

const router = express.Router();

router.post("lottery-generator/api/login", async (req, res) => {
    let email = String(req.body.email);
    let password = String(req.body.password);

    let user = await User.findOne({where: {email: email}}).then((data) => {
        return data;
    });

    if(!user){
        return res.status(404).json({"Error": "Email not found!"});
    }

    try{
        if(await bcrypt.compare(password, user.password)){

        }else{
            res.sendStatus(401);
        }
    }catch(e){

    }
});

export {router as login_router};