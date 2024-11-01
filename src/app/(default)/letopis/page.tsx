import { Metadata } from 'next'
import Letopis from './Letopis'

export const metadata: Metadata = {
    title: 'Летопись школы',
    description: 'Летопись школы',
}

export default function LetopisPage() {
    return <Letopis />
}
