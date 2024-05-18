import { VERSION } from "../../configs/index.js"

export class Response
{
    success = (data: object, total: Number | null , ...options: any[]) => {
        return {
            status: 200,
            success: true,
            version: VERSION,
            total: total,
            result: data,
            ...options
        }
    }


    dataDetail = (data?: object, ...options: any[]) => {
        return {
            status: 200,
            success: true,
            version: VERSION,
            result: data,
            ...options
        }
    }

    notFound = (data: object, ...options: any[]) => {
        return {
            status: 404,
            success: true,
            version: VERSION,
            result: data,
            ...options
        }
    }

    insetSuccess = (...options: any[]) => {
        return {
            status: 200,
            result: options
        }
    }

    insetFailed = (...options: any[]) => {
        return {
            status: 400,
            result: options
        }
    }

    serverError = (message: string, ...options: any[]) => {
        return {
            status: 500,
            success: false,
            version: VERSION,
            result: message,
            ...options
        }
    }

    authSuccess = (data: object, ...options: any[]) => {
        return {
            status: 200,
            success: true,
            version: VERSION,
            result: data,
            ...options
        }
    }

    authClient = (message: string, ...options: any[]) => {
        return {
            status: 400,
            success: false,
            version: VERSION,
            result: message,
            ...options
        }
    }

    unAuth = (message: string, ...options: any[]) => {
        return {
            status: 401,
            success: false,
            version: VERSION,
            result: message,
            ...options
        }
    }

    invalidToken = (message: string, ...options: any[]) => {
        return {
            status: 403,
            success: false,
            version: VERSION,
            result: message,
            ...options
        }
    }
}