import express from 'express';
import { ROUTE as USERS } from './users.js';
import { VERSION } from '../../configs/index.js';
export const ROUTE = express();

/**
 * Static Route
*/
const API = `/api/${VERSION}`


/**
 * User Route Control
 *--------------------------------------------------------------|
 * Method | endpoint                    | middleware            |
 *--------------------------------------------------------------|
 * POST   | /api/${VERSION}/users       |                       |
 * GET    | /api/${VERSION}/users       |                       |
 * GET    | /api/${VERSION}/users/:id   |                       |
 * PUT    | /api/${VERSION}/users       |                       |
 * DELETE | /api/${VERSION}/users/:id   |                       |
 *--------------------------------------------------------------|
*/
ROUTE.use(`${API}/users` , USERS)


export default ROUTE;