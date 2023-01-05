import express from "express";
import { User } from "../Entities/user";

const router = express.Router();

router.get("lottery-generator/api/user", async (req, res) => {
    try{
        User.find().then((data) => res.status(200).json(data));
    }catch(e){
        return res.status(500).json(e);
    }
});

router.get("lottery-generator/api/user/:id", async (req, res) => {
    try{
        User.find({where: {user_id: +req.params.id}}).then((data) => res.status(200).json(data));
    }catch(e){
        return res.status(500).json(e);
    }
});

export {router as user_router};