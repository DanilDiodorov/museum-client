import { SEO } from '@/configs/seo.config'
import { TypeAnimation } from 'react-type-animation'

export default function FirstSection() {
    return (
        <section className="bg-primary text-white py-10">
            <div className="container pt-10">
                <div className="grid-cols-2 md:grid">
                    <div>
                        <h1 className="text-4xl font-bold">{SEO.title}</h1>
                        <div className="mt-5 text-xl">{SEO.description}</div>
                        <div className="text-lg lg:text-2xl mt-14">
                            Направления:{' '}
                            <TypeAnimation
                                sequence={[
                                    'Организационная',
                                    1000,
                                    'Методическая',
                                    1000,
                                    'Нормативная',
                                    1000,
                                    'Исследовательская',
                                    1000,
                                    'Поисковая',
                                    1000,
                                    'Выставочная',
                                    1000,
                                    'Проектная',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="font-bold lowercase"
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
