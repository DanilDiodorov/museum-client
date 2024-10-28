import { ArticleControllerFindOneResult } from '@/services/generated'
import Link from 'next/link'
import React from 'react'

interface Props {
    article: ArticleControllerFindOneResult
}

export const ArticleItem: React.FC<Props> = ({ article }) => {
    return (
        <Link href={`/admin/article/${article.id}`}>
            <div className="bg-gray-300 rounded-md hover:shadow-md hover:cursor-pointer p-3">
                <div>{article.title}</div>
            </div>
        </Link>
    )
}
