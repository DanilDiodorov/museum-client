import { ArticleControllerFindOneResult } from '@/services/generated'
import Link from 'next/link'
import React from 'react'

interface Props {
    article: ArticleControllerFindOneResult
}

export const ArticleItem: React.FC<Props> = ({ article }) => {
    return (
        <Link href={`/articles/${article.id}`}>
            <div className="bg-gray-200 rounded-md hover:shadow-md hover:cursor-pointer p-3">
                <div className="h-[200px]"></div>
                <div className="text-xl">{article.title}</div>
                <div className="text-gray-700">{article.description}</div>
            </div>
        </Link>
    )
}
