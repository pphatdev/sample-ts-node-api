import { UserModel } from '../models/users.js';

export class UserController extends UserModel
{
    constructor() {
        super()
    }


    /**
     * get list of users
     * @param {Object} request
     * @returns
     */
    get = async (request: object) => {
        return this.getData(request)
    };


    /**
     * get detail of users
     * @param {Number|String} request.id
     * @returns
     */
    detail = async (request: object) => {
        return request;
    }


    /**
     * insert new user
     * @param {Object} request
     * @returns
     */
    insert = async (request: object) => {
        return request;
    }


    /**
     * Update User
     * @param {Object} request
     * @returns
     */
    update = async (request: object) => {
        return request;
    }


    /**
     * Delete User
     * @param {Number|String} request.id
     * @returns
     */
    delete = async (request: object) => {
        return request;
    }
}