import { Calendar, Home, Inbox } from 'lucide-react'

import {
    Sidebar,
    SidebarFooter,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'

const items = [
    {
        title: 'Главная',
        url: '/admin',
        icon: Home,
    },
    {
        title: 'Статьи',
        url: '/admin/articles',
        icon: Inbox,
    },
    {
        title: 'Новости',
        url: '/admin/news',
        icon: Calendar,
    },
]

export function AdminSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader title="Админ панель" />
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
            <SidebarFooter />
        </Sidebar>
    )
}
