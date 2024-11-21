import { SEO } from '@/configs/seo.config'
import Link from 'next/link'
import { FaSchool } from 'react-icons/fa'

const AppLogo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-3 w-[270px]">
                <div>
                    <div className="w-[40px] h-[40px] bg-white rounded-xl grid">
                        <FaSchool className="text-primary text-[30px] place-self-center" />
                    </div>
                </div>
                <span>{SEO.title}</span>
            </div>
        </Link>
    )
}

export default AppLogo
