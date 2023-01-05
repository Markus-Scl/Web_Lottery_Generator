import express from "express";
import bcrypt from "bcrypt"
import jwt from "jwt-simple"
import { User } from "../Entities/user";
import 'dotenv/config'

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
            generateAndSendToken(user.email, res);
        }else{
            res.sendStatus(401);
        }
    }catch(e){

    }
});

function generateAndSendToken(user_email: string, res: any){
    let payload = {id: user_email};
    let token = jwt.encode(payload, String(process.env.TOKEN_SECRET));
    return res.status(200).json(token);
}

export {router as login_router};