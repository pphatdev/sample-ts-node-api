import pgsql from "pg"
import { HOST, NAME, PORT, PWD, USER } from "./index.js";
const { Client } = pgsql

export const client = new Client({
    host: HOST,
    port: PORT,
    database: NAME,
    user: USER,
    password: PWD,
});

client.connect((err) => {
    if (err)
        return console.error(`\ncould not connect to postgres '${err.message}\n`);
});