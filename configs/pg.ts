import pgsql from "pg"
import { HOST, NAME, PORT, PWD, USER } from "./index.js";
const { Client } = pgsql

const config = {
    host: HOST,
    port: PORT,
    database: NAME,
    user: USER,
    password: PWD,
}

export const client = new Client(config);

client.connect((err) => {
    if (err) {
        console.log(`\n\x1b[41mcould not connect to database:\x1b[0m`);
        console.table([err])
        console.log(`\n\n\x1b[41mConnection information:\x1b[0m`);
        console.table([config])
        return false
    }
});