import express from "express";
import {DataSource} from "typeorm"
import { User } from "../Entities/user";
import "dotenv/config";
import { login_router } from "../Routes/login_router";
import { register_router } from "../Routes/register_router";
import { user_router } from "../Routes/user_router";

const app = express();



const main = async () => {

    try{
        let dataSource = new DataSource({
            type: 'postgres',
            host: process.env.HOST,
            port: Number(process.env.PORT),
            database: process.env.DATABASE,
            username: process.env.USERNAMEE,
            password: process.env.PASSWORD,
            logging: true,
            synchronize: true,
            entities:[User]
        });
        console.log(dataSource);

        let connection = await dataSource.initialize();

        app.use(express.json);
        app.use(login_router, register_router, user_router);

        app.listen(3000, () => {
            console.log("Server running on port", 3000);
        });

    }catch(e){
        console.error(e);
    }
}

main();