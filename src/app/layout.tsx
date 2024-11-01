import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.css'
import 'ckeditor5/ckeditor5.css'
import { Providers } from './Providers'
import { SEO } from '@/configs/seo.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: SEO.title,
        template: `%s - ${SEO.title}`,
    },
    description: SEO.description,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <main className="min-h-screen">
                    <Providers>{children}</Providers>
                </main>
            </body>
        </html>
    )
}
