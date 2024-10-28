'use client'

import { categoryControllerFindAll } from '@/services/generated'
import { useQuery } from '@tanstack/react-query'
import { CategoryItem } from './CategoryItem'
import { Button } from '@/components/ui/button'
import { CategoryForm } from './CategoryForm'

export const CategoryList = () => {
    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoryControllerFindAll(),
    })

    return (
        <div>
            {data?.map((el) => (
                <CategoryItem category={el} key={el.id} />
            ))}
            <div className="mt-3">
                <CategoryForm
                    openButtonText="Добавить категорию"
                    okButtonText="Добавить"
                />
            </div>
        </div>
    )
}
