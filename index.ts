import express, { Request, Response } from 'express';
import { ENV, PORT } from './configs/index.js';
import { ROUTE } from "./src/apis/index.js";


/**
 * Defualt End point
*/
const APP = express();


/**
 * Initalize Route
*/
APP.use(ROUTE)


/**
 * Defualt End point
*/
APP.get('*', (request: Request, response: Response) => {
    response.send(
        {
            status: 200,
            method: request.method,
            message: "Hello World!",
            query: request.query,
        }
    );
});


/**
 * Lisenting on port
*/
APP.listen( PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
    console.log(`\n♻️  Starting with: [\x1b[35m${ ENV }\x1b[0m\] Mode!`)
    console.log(`🚀 \x1b[30mLocalhost:\x1b[32m http://localhost:${ PORT }\x1b[0m`)
    console.log(`🚀 \x1b[30mLocal Service:\x1b[32m http://127.0.0.1:${ PORT }\x1b[0m`)
});

export default APP;