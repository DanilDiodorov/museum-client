import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
} from '@material-tailwind/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'

const menuItems = [
    {
        title: '@material-tailwind/html',
        description:
            'Learn how to use @material-tailwind/html, packed with rich components and widgets.',
    },
    {
        title: '@material-tailwind/react',
        description:
            'Learn how to use @material-tailwind/react, packed with rich components for React.',
    },
    {
        title: 'Material Tailwind PRO',
        description:
            'A complete set of UI Elements for building faster websites in less time.',
    },
]

export function MenuDrop({
    title,
    items,
    currentPath,
}: {
    title: string
    items: { title: string; path: string }[]
    currentPath: string
}) {
    const [openMenu, setOpenMenu] = React.useState(false)

    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
                <div className="flex items-center gap-3 text-base font-normal capitalize tracking-normal text-white">
                    {title}
                </div>
            </MenuHandler>
            <MenuList
                placeholder="asd"
                className="hidden overflow-visible md:grid mt-3"
            >
                <ul className="text-black flex flex-col gap-5 font-bold text-md p-3 text-[16px]">
                    {items.map(({ title, path }, index) => {
                        const isActive = currentPath.startsWith(path)
                        return (
                            <li key={index}>
                                {isActive ? (
                                    <Link
                                        className="border-b-2 border-b-black"
                                        href={path}
                                    >
                                        {title}
                                    </Link>
                                ) : (
                                    <Link
                                        className="hover:border-b-2 hover:border-b-black"
                                        href={path}
                                    >
                                        {title}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </MenuList>
        </Menu>
    )
}
