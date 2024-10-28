import { CategoryDto } from '@/services/generated'
import React from 'react'
import { ArticleList } from './ArticleList'
import { CategoryForm } from './CategoryForm'

interface Props {
    category: CategoryDto
}

export const CategoryItem: React.FC<Props> = ({ category }) => {
    return (
        <div className="mt-3">
            <div className="text-xl font-bold">
                {category.title}{' '}
                <CategoryForm
                    category={category}
                    openButtonText="Редактировать категорию"
                    okButtonText="Сохранить"
                />
            </div>

            <div>
                <ArticleList
                    articles={category.article}
                    categoryId={category.id}
                />
            </div>
        </div>
    )
}
