export default function PdfLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            <div className="md:container">{children}</div>
        </div>
    )
}
