import jwt from 'jwt-simple';

export class AuthenticationService{

    constructor(){

    }
    checkAuthentication(req: any): number{

        if(!req.header('authorization')){
            return -1;
        }

        let payload = null;

        try{
            let token = req.header('authorization').split(' ')[1];
            payload = jwt.decode(token, String(process.env.TOKEN_SECRET));

        }catch(e){
            return -1;
        }

        if(!payload){
            return -1;
        }
        return payload.id;
    }
}