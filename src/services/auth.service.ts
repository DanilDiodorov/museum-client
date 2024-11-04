import { axiosClassic } from '@/lib/api-instance'
import { removeFromStorage, saveTokenStorage } from './auth.helper'
import { AuthDto, AuthResponseDto } from './generated'

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken',
}

export const authService = {
    async main(type: 'login' | 'register', data: AuthDto) {
        const response = await axiosClassic.post<AuthResponseDto>(
            `/api/auth/${type}`,
            data
        )

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    },

    async getNewTokens() {
        const response = await axiosClassic.post<AuthResponseDto>(
            '/api/auth/login/access-token'
        )

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    },

    async logout() {
        const response = await axiosClassic.post<boolean>('/api/auth/logout')

        if (response.data) removeFromStorage()

        return response
    },
}
