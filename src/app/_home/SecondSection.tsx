import Image from 'next/image'

export default function SecondSection() {
    return (
        <div>
            <div className="container py-10">
                <h2 className="text-4xl font-bold text-tarawera-950">
                    Школа вчера
                </h2>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="rounded-md mt-5 w-full"
                    src={'/images/4.jpg'}
                    alt="Школы вчера"
                />

                <div className="mt-5 text-xl text-tarawera-950">
                    Здесь хранятся материалы об истории школы от момента её
                    открытия, т.е. с 1928 года. Документы экспозиции
                    рассказывают об учителях, о заведующих и директорах,
                    работавших в школе, воспоминания выпускников, о пионерской и
                    комсомольской организациях школы.
                </div>
            </div>
        </div>
    )
}
