import Image from 'next/image'
import image1 from '@/assets/1.jpg'
import image2 from '@/assets/2.jpg'
import { Carousel } from '@material-tailwind/react'

export default function FourthSection() {
    return (
        <div className="">
            <div className="container py-10 md:hidden">
                <h2 className="text-4xl font-bold">
                    Никто не забыт – ничто не забыто
                </h2>
                <Carousel
                    className="rounded-md mt-5"
                    placeholder="Никто не забыт – ничто не забыто"
                >
                    <Image
                        className="h-[700px] object-cover w-full"
                        src={image1}
                        alt="Школы сегодня"
                    />
                    <Image
                        className="h-[700px] object-cover w-full"
                        src={image2}
                        alt="Школы сегодня"
                    />
                </Carousel>

                <div className="mt-5 text-xl">
                    Представлены экспозиции:
                    <ul className="list-disc pl-5 mt-3">
                        <li>
                            «Участники Великой Отечественной войны Учурского
                            района»
                        </li>
                        <li>Ветераны тыла Анаминского наслега»</li>
                        <li>
                            «Подвиг советского народа в Великой Отечественной
                            войне»
                        </li>
                        <li>«Якутия в годы Великой Отечественной войны»</li>
                    </ul>
                </div>
            </div>
            <div className="container py-10 hidden md:block">
                <div className="grid grid-cols-2 items-center gap-5">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Никто не забыт – ничто не забыто
                        </h2>
                        <div className="mt-5 text-xl">
                            Представлены экспозиции:
                            <ul className="list-disc pl-5 mt-3">
                                <li>
                                    «Участники Великой Отечественной войны
                                    Учурского района»
                                </li>
                                <li>Ветераны тыла Анаминского наслега»</li>
                                <li>
                                    «Подвиг советского народа в Великой
                                    Отечественной войне»
                                </li>
                                <li>
                                    «Якутия в годы Великой Отечественной войны»
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Carousel
                        className="rounded-md"
                        placeholder="Никто не забыт – ничто не забыто"
                    >
                        <Image
                            className="h-[700px] object-cover w-full"
                            src={image1}
                            alt="Школы сегодня"
                        />
                        <Image
                            className="h-[700px] object-cover w-full"
                            src={image2}
                            alt="Школы сегодня"
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
