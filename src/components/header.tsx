'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import AppLogo from './app-logo'
import { usePathname } from 'next/navigation'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Collapse,
} from '@material-tailwind/react'
import { IoMenu } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import { MenuDrop } from './menu-drop'
import useScroll from '@/hooks/useScroll'

const MENU_LIST = [
    {
        title: 'История',
        children: [
            {
                title: 'История школы',
                path: '/pdf/history-of-school',
            },
            {
                title: 'История интерната',
                path: '/pdf/history-of-internat',
            },
            {
                title: 'Охлопков С. В.',
                path: '/pdf/okhlopkov',
            },
            {
                title: 'Дормидонтов В. М.',
                path: '/pdf/dormidontov',
            },
            {
                title: 'Софронов Т. М.',
                path: '/pdf/sofronov',
            },
        ],
    },
    {
        title: 'Выпускники',
        path: '/graduates',
    },
    {
        title: 'Летопись',
        path: '/letopis',
    },
    {
        title: 'Сертификат',
        path: '/pdf/sertificat',
    },
]

const NavList = ({ setOpenNav }: { setOpenNav: (isOpen: boolean) => void }) => {
    const [open, setOpen] = useState<number>(-1)
    const pathName = usePathname()
    return (
        <ul className="flex gap-4 md:gap-7 md:flex-row md:p-0 flex-col py-5 z-20">
            {MENU_LIST.map((item, index) => {
                if (item.children) {
                    return (
                        <>
                            <div className="hidden md:block">
                                <MenuDrop
                                    key={index}
                                    title={item.title}
                                    items={item.children}
                                    currentPath={pathName}
                                />
                            </div>
                            <div className="md:hidden block">
                                <Accordion
                                    open={open === index}
                                    placeholder="asd"
                                    className="text-white border-b-transparent py-0"
                                >
                                    <AccordionHeader
                                        placeholder="asd"
                                        className="text-white border-b-transparent text-[16px] hover:text-white py-0"
                                        onClick={() =>
                                            setOpen(index === open ? -1 : index)
                                        }
                                    >
                                        {item.title}
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <ul className="flex gap-7 flex-col text-white">
                                            {item.children.map(
                                                (
                                                    { title, path },
                                                    childIndex
                                                ) => {
                                                    const isActive =
                                                        pathName.startsWith(
                                                            path
                                                        )
                                                    return (
                                                        <li
                                                            key={
                                                                index +
                                                                childIndex +
                                                                'child'
                                                            }
                                                            onClick={() => {
                                                                setOpenNav(
                                                                    false
                                                                )
                                                                setOpen(-1)
                                                            }}
                                                        >
                                                            {isActive ? (
                                                                <Link
                                                                    className="border-b-2"
                                                                    href={path}
                                                                >
                                                                    {title}
                                                                </Link>
                                                            ) : (
                                                                <Link
                                                                    className="hover:border-b-2"
                                                                    href={path}
                                                                >
                                                                    {title}
                                                                </Link>
                                                            )}
                                                        </li>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </AccordionBody>
                                </Accordion>
                            </div>
                        </>
                    )
                } else {
                    const isActive = pathName.startsWith(item.path)
                    return (
                        <li key={index} onClick={() => setOpenNav(false)}>
                            {isActive ? (
                                <Link className="border-b-2" href={item.path}>
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
                }
            })}
        </ul>
    )
}

const Header = () => {
    const [openNav, setOpenNav] = useState<boolean>(false)
    const [isOnTop, setIsOnTop] = useState<boolean>(true)
    const currentScroll = useScroll()

    React.useEffect(() => {
        if (currentScroll > 100) {
            setIsOnTop(false)
        } else {
            setIsOnTop(true)
        }
    }, [currentScroll])

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false)

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])
    return (
        <>
            <div className="min-h-[80px] z-20 bg-tarawera-950">
                <header
                    className={`${
                        isOnTop
                            ? 'bg-tarawera-950'
                            : 'fixed px-5 py-1 w-[100vw]'
                    } text-white flex items-center z-20`}
                >
                    <nav
                        className={`container ${
                            !isOnTop && 'shadow-xl bg-tarawera-900'
                        }  bg-tarawera-950 z-20 rounded-md transition-all py-3 duration-300`}
                    >
                        <div className="flex justify-between">
                            <AppLogo />
                            <div className="flex items-center">
                                <div className="hidden md:block">
                                    <NavList setOpenNav={setOpenNav} />
                                </div>
                                <div
                                    className="md:hidden"
                                    onClick={() => setOpenNav(!openNav)}
                                >
                                    {openNav ? (
                                        <MdClose className="h-6 w-6" />
                                    ) : (
                                        <IoMenu className="h-6 w-6" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <Collapse open={openNav} className="z-20">
                            <NavList setOpenNav={setOpenNav} />
                        </Collapse>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header
