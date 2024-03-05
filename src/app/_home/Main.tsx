'use client'
// import image1 from '@/assets/1.jpg'
// import image2 from '@/assets/2.jpg'
// import image3 from '@/assets/3.jpg'
import FirstSection from './FirstSection'
import FourthSection from './FourthSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'

export default function Main() {
    return (
        <div>
            <FirstSection />
            {/* <div className="container text-3xl font-bold mt-5">Разделы</div> */}
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    )
}
