import express from "express";
import bcrypt from "bcrypt"
import { User } from "../Entities/user";

const router = express.Router();

router.post("lottery-generator/api/register", async (req, res) => {
    try{
        let {
            first_name,
            last_name,
            email,
            password,
        } : {
            first_name: string,
            last_name: string,
            email: string,
            password: string,
        } = req.body;

        first_name = first_name.trim();
        last_name = last_name.trim();
        email = email.trim();

        if(first_name.length === 0 || last_name.length === 0 || email.length === 0 || password.length == 0){
            return res.status(422).json({"Error": "All fields must be filled for registrarion!"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);

        const new_user = User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashed_password
        });

        await User.insert(new_user);
        return res.status(200).json(new_user);

    }catch(e){
        return res.status(500).json(e);
    }
});

export {router as register_router};