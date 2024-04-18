import { config } from "dotenv";
import { Columns, DBHost, DBName, DBPassword, DBPort, DBUser, Env, Limit, Page, Searches, Sort, Version } from './types.js';

config()

export const VERSION: Version = process.env.VERSION || "v1"
export const PORT: DBPort = Number(process.env.DB_PORT || 5432)
export const HOST: DBHost = process.env.DB_HOST || ""
export const NAME: DBName = process.env.DB_NAME || ""
export const USER: DBUser = process.env.DB_USER || ""
export const PWD: DBPassword = process.env.DB_PWD || ""
export const ENV: Env = process.env.NODE_ENV || "development"
export const PAGE: Page = Number(process.env.PAGE) || 1
export const LIMIT: Limit = Number(process.env.LIMIT) || 20
export const LOGIN_EXP: Date = new Date(new Date().getTime() + 2627999999.97164)

export const SEARCH: Searches = {
    column: [],
    operator: "",
    value: null,
    condition: "or",
    withWere: true
}

export const SORT: Sort = {
    column: [],
    value: "asc"
}

export const COLUMNS: Columns = []
