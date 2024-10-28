'use client'

import { CategoryList } from './CategoryList'

export default function Page() {
    return (
        <div className="container">
            <div className="text-3xl">Статьи</div>
            <CategoryList />
        </div>
    )
}
