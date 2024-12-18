'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import AppLogo from './AppLogo'
import { usePathname } from 'next/navigation'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Collapse,
} from '@material-tailwind/react'
import { IoMenu } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import { MenuDrop } from './MenuDrop'
import useScroll from '@/hooks/useScroll'
import { IoIosArrowDown } from 'react-icons/io'
import { MENU_LIST } from '@/configs/menu.config'
import { useGetSession } from '@/hooks/use-get-session'

const NavList = ({
    setOpenNav,
    isOnTop,
}: {
    setOpenNav: (isOpen: boolean) => void
    isOnTop?: boolean
}) => {
    const [open, setOpen] = useState<number>(-1)
    const { user } = useGetSession()
    const pathName = usePathname()

    const isLogged = user ? true : false

    return (
        <ul className="flex md:gap-7 md:flex-row md:p-0 flex-col py-5 z-20 ">
            {MENU_LIST.filter((el) => {
                return el.protected === false || (el.protected && isLogged)
            }).map((item, index) => {
                if (item.children) {
                    return (
                        <li key={index}>
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
                                    className={`text-white border-b-transparent transition-all py-2 container ${
                                        index === open &&
                                        (isOnTop
                                            ? 'bg-tarawera-900'
                                            : 'bg-tarawera-950')
                                    }`}
                                >
                                    <AccordionHeader
                                        placeholder="asd"
                                        className="text-white border-b-transparent text-[16px] hover:text-white py-0 font-100 flex justify-start gap-3 items-center"
                                        onClick={() =>
                                            setOpen(index === open ? -1 : index)
                                        }
                                    >
                                        <span>{item.title}</span>{' '}
                                        <IoIosArrowDown
                                            className={`transition-all ${
                                                index === open && 'rotate-180'
                                            }`}
                                        />
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
                        </li>
                    )
                } else {
                    const isActive = pathName.startsWith(item.path)
                    return (
                        <li
                            className="container md:m-0 md:p-0 py-2"
                            key={index}
                            onClick={() => setOpenNav(false)}
                        >
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
            <div className="min-h-[75px] z-20 bg-primary">
                <header
                    className={`${
                        isOnTop ? 'bg-primary' : 'fixed py-1 w-[100vw] px-3'
                    } text-white flex items-center z-20`}
                >
                    <nav
                        className={`${
                            !isOnTop && 'shadow-xl bg-primary'
                        }  z-20 rounded-md transition-all py-3 duration-300 w-full md:container`}
                    >
                        <div className="flex justify-between container md:p-0 md:m-0">
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
                        <Collapse open={openNav} className="z-20 md:hidden">
                            <NavList
                                setOpenNav={setOpenNav}
                                isOnTop={isOnTop}
                            />
                        </Collapse>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header
