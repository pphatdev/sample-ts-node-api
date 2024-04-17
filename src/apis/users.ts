import express, { Request, Response } from 'express'
import { UserController } from '../controllers/users.js'

export const USERS = new UserController()
export const ROUTE = express()


/**
 * Get Users List
 *--------------------------------------------------------------|
 * Method | endpoint                    | middleware            |
 *--------------------------------------------------------------|
 * GET    | /api/${VERSION}/users       |                       |
 *--------------------------------------------------------------|
*/
ROUTE.get("/", async (request: Request, response: Response) =>
{
    const getUser = await USERS.get(request.query);
    response.send(getUser);
});


/**
 * Get User Detail
 *--------------------------------------------------------------|
 * Method | endpoint                    | middleware            |
 *--------------------------------------------------------------|
 * GET    | /api/${VERSION}/users/:id   |                       |
 *--------------------------------------------------------------|
*/
ROUTE.get('/:id', (request: Request, response: Response) =>
{
    response.send(request.query)
})


/**
 * Insert User
 *--------------------------------------------------------------|
 * Method   | endpoint                    | middleware          |
 *--------------------------------------------------------------|
 * POST     | /api/${VERSION}/users       |                     |
 *--------------------------------------------------------------|
*/
ROUTE.post('/', (request: Request, response: Response) =>
{
    response.send(request.query)
})


/**
 * Update User
 *--------------------------------------------------------------|
 * Method   | endpoint                    | middleware          |
 *--------------------------------------------------------------|
 * PUT      | /api/${VERSION}/users       |                     |
 *--------------------------------------------------------------|
*/
ROUTE.put('/', (request: Request, response: Response) =>
{
    response.send(request.query)
})


/**
 * Delete User
 *----------------------------------------------------------------|
 * Method   | endpoint                      | middleware          |
 *----------------------------------------------------------------|
 * DELETE   | /api/${VERSION}/users/:id     |                     |
 *----------------------------------------------------------------|
*/
ROUTE.delete('/', (request: Request, response: Response) =>
{
    response.send(request.query)
})

export default ROUTE