'use client'

import { useQuery } from '@tanstack/react-query'
import { ArticleForm } from '../_main/ArticleForm'
import { articleControllerFindOne } from '@/services/generated'

interface Props {
    params: {
        id: string
    }
}

export default function Page({ params: { id } }: Props) {
    const { data } = useQuery({
        queryKey: ['article', id],
        queryFn: () => articleControllerFindOne(id),
    })

    return (
        <div className="container">
            {data && <ArticleForm article={data} />}
        </div>
    )
}
