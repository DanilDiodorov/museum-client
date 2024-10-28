import Image from 'next/image'

export default function ThirdSection() {
    return (
        <div className="bg-primary text-white">
            <div className="container py-10 md:hidden">
                <h2 className="text-4xl font-bold">Школа сегодня</h2>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="rounded-md mt-3 h-[700px] object-cover w-full"
                    src={'/images/3.jpg'}
                    alt="Школы сегодня"
                />
                <div className="mt-3 text-xl">
                    Здесь хранятся документы обо всех учителях, которые работают
                    в школе, о народном коллективе «Биракан» (кубки и грамоты),
                    о педагогических династиях Охлопковых и Софроновых, о
                    выпускниках – гордость школы, «Ими гордится школа» (об
                    участниках СВО- выпускниках школы)
                </div>
            </div>
            <div className="container py-10 hidden md:block">
                <div className="grid grid-cols-2 items-center gap-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="rounded-md mt-3 h-[700px] object-cover w-full"
                        src={'/images/3.jpg'}
                        alt="Школы сегодня"
                    />
                    <div>
                        <h2 className="text-4xl font-bold">Школа сегодня</h2>
                        <div className="mt-5 text-xl">
                            Здесь хранятся документы обо всех учителях, которые
                            работают в школе, о народном коллективе «Биракан»
                            (кубки и грамоты), о педагогических династиях
                            Охлопковых и Софроновых, о выпускниках – гордость
                            школы, «Ими гордится школа» (об участниках СВО-
                            выпускниках школы)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
