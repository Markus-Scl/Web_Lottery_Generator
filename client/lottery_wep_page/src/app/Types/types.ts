export interface User {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    admin: boolean;
}

export interface UserData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface LotteryNumbers{
    fiveFromFifty: number[];
    twoFromTwelve: number[];
    date: Date;
}

export interface JWT{
    token: string;
    id: string;
}