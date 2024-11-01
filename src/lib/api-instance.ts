import {
    AxiosError,
    AxiosRequestConfig,
} from './../../node_modules/axios/index.d'
import axios from 'axios'

export const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PUBLIC_API_URL,
})

export const createInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig,
): Promise<T> => {
    return apiInstance({
        ...config,
        ...options,
    }).then((r) => r.data)
}

export type BodyType<Data> = Data

export type ErrorType<Error> = AxiosError<Error>
