import { ArticleControllerFindAllResult } from '@/services/generated'
import React from 'react'
import { ArticleItem } from './ArticleItem'

interface Props {
    articles: ArticleControllerFindAllResult
}

export const ArticleList: React.FC<Props> = ({ articles }) => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
            {articles.map((el) => (
                <ArticleItem key={el.id} article={el} />
            ))}
        </div>
    )
}
