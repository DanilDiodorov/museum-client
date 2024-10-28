'use server'

import { categoryControllerFindAll } from '@/services/generated'
import { CategoryList } from './CategoryList'

export default async function Page() {
    const categories = await categoryControllerFindAll()

    return (
        <div className="container">
            <CategoryList categories={categories} />
        </div>
    )
}
