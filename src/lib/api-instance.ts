import { getAccessToken, removeFromStorage } from '@/services/auth.helper'
import {
    AxiosError,
    AxiosRequestConfig,
} from './../../node_modules/axios/index.d'
import axios from 'axios'
import { errorCatch } from './api.helper'
import { authService } from '@/services/auth.service'

export const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
})

export const axiosClassic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
})

export const createInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig
): Promise<T> => {
    return apiInstance({
        ...config,
        ...options,
    }).then((r) => r.data)
}

export type BodyType<Data> = Data

export type ErrorType<Error> = AxiosError<Error>

apiInstance.interceptors.request.use((config) => {
    const accessToken = getAccessToken()

    if (config?.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

apiInstance.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config

        if (
            (error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                await authService.getNewTokens()
                return apiInstance.request(originalRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') removeFromStorage()
            }
        }

        throw error
    }
)
