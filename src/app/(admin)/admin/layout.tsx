'use client'

import { AdminSidebar } from '@/app/(admin)/admin/AdminSidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main
            className="w-full h-screen grid"
            style={{ gridTemplateColumns: '150px 1fr' }}
        >
            <AdminSidebar />
            <div className=" overflow-y-auto">
                <div className="w-[70%] mx-auto h-full">{children}</div>
            </div>
        </main>
    )
}
