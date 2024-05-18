import { Response } from '../helpers/response.js';
// import { client } from '../../configs/pg.js';
import { Pagination } from '../helpers/pagination.js';
import { GetList } from '../../configs/types.js';
import { client } from '../../configs/pg.js';

const pagination = new Pagination()

export class UserModel extends Response
{
    /**
     * get list of users
     * @param {Object} request
     * @returns
     */
    getData = async (request: GetList) => {

        try {
            const { page, limit, search, sort } = request
            const count = await client.query(`SELECT count(id) from public.users`)
            const total = count.rows[0].count || 0
            const query = pagination.query(
                {
                    table: 'public.users',
                    selectColumns: ["id", "name", "email", "created_at", "updated_at"],
                    conditions: {
                        operator: 'WHERE',
                        value: ''
                    },
                    page: page,
                    limit: limit,
                    search: {
                        column: [ 'name' ],
                        value: search,
                        operator: "or",
                        condition: "",
                        withWere: true
                    },
                    sort: {
                        column: [ "name"],
                        value: sort
                    }
                }
            )
            const reponse = await client.query(query, [])
            return this.success(reponse.rows, total)
        } catch (error) {
            console.log(error)
        }
    };


    /**
     * get detail of users
     * @param {Number|String} request.id
     * @returns
     */
    detailData = async (id: string) => {
        const response = await client.query(`SELECT * from public.users where id = $1`, [id])
        return this.dataDetail(response.rows)
    }


    /**
     * insert new user
     * @param {Object} request
     * @returns
     */
    insertData = async (request: object) => {
        return request;
    }


    /**
     * Update User
     * @param {Object} request
     * @returns
     */
    updateData = async (request: object) => {
        return request;
    }


    /**
     * Delete User
     * @param {Number|String} request.id
     * @returns
     */
    deleteData = async (request: object) => {
        return request;
    }
}