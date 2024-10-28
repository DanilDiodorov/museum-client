import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            <Header />
            <div className="min-h-screen">{children}</div>
            <Footer />
        </div>
    )
}
