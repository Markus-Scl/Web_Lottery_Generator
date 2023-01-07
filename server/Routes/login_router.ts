import express from "express";
import bcrypt from "bcrypt"
import jwt from "jwt-simple"
import { User } from "../Entities/user";
import 'dotenv/config'

const router = express.Router();

router.post("/lottery-generator/api/login", async (req, res) => {
    let email = String(req.body.email);
    let password = String(req.body.password);

    let user = await User.findOne({where: {email: email}}).then((data) => {
        return data;
    });

    if(!user){
        return res.sendStatus(401);
    }

    try{
        if(await bcrypt.compare(password, user.password)){
            generateAndSendToken(user.user_id, res);
        }else{
           return res.sendStatus(401);
        }
    }catch(e){
        return res.sendStatus(401);
    }
});

function generateAndSendToken(user_id: number, res: any){
    let payload = {id: user_id};
    let token = jwt.encode(payload, String(process.env.TOKEN_SECRET));
    return res.status(200).json({token});
}

export {router as login_router};