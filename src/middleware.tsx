import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth.service'

export async function middleware(request: NextRequest, response: NextResponse) {
    const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value
    const isAdminPage = request.url.includes('/admin')

    if (!refreshToken) {
        return redirectToLogin(isAdminPage, request)
    }

    return NextResponse.next()
}

export const config = {
    // Указываем url для которых будет работать
    matcher: ['/admin/:path*'],
}

const redirectToLogin = (isAdminPage: boolean, request: NextRequest) => {
    return NextResponse.redirect(new URL('/auth', request.url))
}
