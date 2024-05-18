import { PAGE } from '../../configs/index.js';
import { GetList } from '../../configs/types.js';
import { UserModel } from '../models/users.js';

export class UserController extends UserModel
{
    constructor()
    {
        super()
    }


    /**
     * get list of users
     * @param {GetList} request
     * @returns
     */
    get = async (request: any) =>
    {
        const {
            limit,
            page,
            search,
            sort
        } = request;

        const defaultList: GetList = {
            page: page || PAGE,
            limit: limit || "all",
            search: search || null,
            sort: sort || "asc"
        };

        const response = await this.getData(defaultList)
        return response
    };


    /**
     * get detail of users
     * @param {Number|String} request.id
     * @returns
     */
    detail = async (id: string) =>
    {
        return this.detailData(id);
    }


    /**
     * insert new user
     * @param {Object} request
     * @returns
     */
    insert = async (request: object) =>
    {
        return request;
    }


    /**
     * Update User
     * @param {Object} request
     * @returns
     */
    update = async (request: object) =>
    {
        return request;
    }


    /**
     * Delete User
     * @param {Number|String} request.id
     * @returns
     */
    delete = async (request: object) =>
    {
        return request;
    }
}