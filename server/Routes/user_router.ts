import express from "express";
import { User } from "../Entities/user";
import { AuthenticationService } from "../Services/authenticationService";

const router = express.Router();
const auth_service = new AuthenticationService();

router.get("/lottery-generator/api/user", async (req, res) => {
    try{
        User.find().then((data) => res.status(200).json(data));
    }catch(e){
        return res.status(500).json(e);
    }
});

router.get("/lottery-generator/api/user/:id", async (req, res) => {
    let id = auth_service.checkAuthentication(req);
    if(id === -1){
        return res.sendStatus(401);
    }

    try{
        User.findOne({where: {user_id: id}}).then((data) => {
            let user = {
                user_id: data?.user_id,
                first_name: data?.first_name,
                last_name: data?.last_name,
                email: data?.email,
                admin: data?.admin
            }
            res.status(200).json(user);
        });
    }catch(e){
        return res.sendStatus(401);
    }
});

export {router as user_router};