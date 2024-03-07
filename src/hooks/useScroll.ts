import { useEffect, useState } from 'react'

export default function useScroll() {
    const [currentScroll, setCurrentScroll] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            setCurrentScroll(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return currentScroll
}
