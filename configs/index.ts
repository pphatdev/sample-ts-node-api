import { config } from "dotenv";
import { Columns, DBHost, DBName, DBPassword, DBPort, DBUser, Env, Limit, Page, Search, Sort, Version } from './types.js';

config()

export const VERSION: Version = process.env.VERSION || "v1"
export const PORT: DBPort = Number(process.env.PORT || 3000)
export const HOST: DBHost = process.env.DB_HOST || ""
export const NAME: DBName = process.env.DB_NAME || ""
export const USER: DBUser = process.env.DB_USER || ""
export const PWD: DBPassword = process.env.DB_PWD || ""
export const ENV: Env = process.env.NODE_ENV || "development"

export const LOGIN_EXP: Date = new Date(new Date().getTime() + 2627999999.97164)

export const PAGE: Page = process.env.PAGE || 1
export const LIMIT: Limit = process.env.PAGE || 20

export const SEARCH: Search = {
    column: [],
    value: null,
    condition: "or",
    withWere: true
}
export const SORT: Sort = {
    column: [],
    value: "asc"
}

export const COLUMNS: Columns = []
