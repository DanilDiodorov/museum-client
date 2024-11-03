'use client'

import { AdminSidebar } from '@/app/(admin)/admin/AdminSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <main className="w-full p-3">
                <SidebarTrigger />
                <div className="w-[70%] mx-auto">{children}</div>
            </main>
        </SidebarProvider>
    )
}
