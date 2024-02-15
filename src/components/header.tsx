'use client'

import Link from 'next/link'
import AppLogo from './app-logo'
import { usePathname } from 'next/navigation'

const MENU_LIST = [
    {
        title: 'История школы',
        path: '/pdf/history-of-school',
    },
]

const Header = () => {
    const pathName = usePathname()
    return (
        <header className="bg-tarawera-950 h-[80px] text-white flex items-center">
            <div className="container flex justify-between">
                <AppLogo />
                <nav className="flex items-center">
                    <ul className="flex gap-7">
                        {MENU_LIST.map((item, index) => {
                            const isActive = pathName.startsWith(item.path)

                            return (
                                <li key={index}>
                                    {isActive ? (
                                        <Link
                                            className="border-b-2"
                                            href={item.path}
                                        >
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <Link
                                            className="hover:border-b-2"
                                            href={item.path}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
