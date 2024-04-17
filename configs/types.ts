export type DBPort = number;

export type DBHost = string;

export type DBName = string;

export type DBUser = string;

export type DBPassword = string;

export type Version = string | number;

export type Env = string;

export type Page = number | string;

export type Limit = number | string;

export type Columns = Array<any>;

export type Search = {
    column: Columns;
    value: number | string | null;
    condition: string | "or" | "and";
    withWere: boolean | true;
};

export type Sort = {
    column: Columns;
    value: string | "asc" | "desc";
};

export type DB = {
    host: DBHost;
    port: DBPort;
    database: DBName;
    user: DBUser;
    password: DBPassword;
}