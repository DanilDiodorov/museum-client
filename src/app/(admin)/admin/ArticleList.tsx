import { ArticleControllerFindAllResult } from '@/services/generated'
import React from 'react'
import { ArticleItem } from './ArticleItem'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface Props {
    articles: ArticleControllerFindAllResult
    categoryId: string
}

export const ArticleList: React.FC<Props> = ({ articles, categoryId }) => {
    const router = useRouter()

    return (
        <div className="grid grid-cols-3 gap-3 mt-3">
            {articles.map((el) => (
                <ArticleItem key={el.id} article={el} />
            ))}
            <Button
                onClick={() => {
                    router.push(`/admin/article/add?categoryId=${categoryId}`)
                }}
            >
                Добавить
            </Button>
        </div>
    )
}
