'use client'

import { CategoryDto } from '@/services/generated'
import React from 'react'
import { ArticleList } from './ArticleList'

interface Props {
    category: CategoryDto
}

export const CategoryItem: React.FC<Props> = ({ category }) => {
    return (
        <div className="mt-3">
            <div className="text-2xl font-bold">{category.title}</div>
            <div>
                <ArticleList articles={category.article} />
            </div>
        </div>
    )
}
