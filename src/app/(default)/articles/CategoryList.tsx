import { CategoryDto } from '@/services/generated'
import { CategoryItem } from './CategoryItem'
import React from 'react'

interface Props {
    categories: CategoryDto[]
}

export const CategoryList: React.FC<Props> = ({ categories }) => {
    return (
        <div>
            {categories.map((el) => (
                <CategoryItem category={el} key={el.id} />
            ))}
        </div>
    )
}
