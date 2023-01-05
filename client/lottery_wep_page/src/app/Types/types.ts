export interface User {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    admin: boolean;
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