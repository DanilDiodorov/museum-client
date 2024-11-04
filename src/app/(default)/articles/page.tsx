'use client'

import { categoryControllerFindAll } from '@/services/generated'
import { CategoryList } from './CategoryList'
import { useSuspenseQuery } from '@tanstack/react-query'

export default function Page() {
    const { data: categories } = useSuspenseQuery({
        queryKey: ['categories'],
        queryFn: categoryControllerFindAll,
    })

    return (
        <div className="container">
            <CategoryList categories={categories} />
        </div>
    )
}
