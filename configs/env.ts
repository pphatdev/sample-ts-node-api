import { config } from "dotenv";
import { DB } from "./types";
import { ENV, HOST, NAME, PORT, USER } from ".";

config()

export const db: DB = {
    host: HOST,
    port: PORT,
    database: NAME,
    user: USER,
    password: ENV,
};
