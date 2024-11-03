'use server'

import {
    articleControllerFindAll,
    articleControllerFindOne,
} from '@/services/generated'
import { notFound } from 'next/navigation'
import { cache } from 'react'

interface Props {
    params: {
        id: string
    }
}

const getArticles = cache(async (id: string) => {
    const article = await articleControllerFindOne(id)

    return article
})

// export async function generateStaticParams() {
//     const articles = await articleControllerFindAll()

//     return articles.map(({ id }) => id)
// }

export async function generateMetadata({ params: { id } }: Props) {
    const article = await getArticles(id)
    return {
        title: article.title,
        description: article.description,
    }
}

export default async function Page({ params: { id } }: Props) {
    const article = await getArticles(id)

    if (article) {
        return (
            <div className="py-5">
                <div className="px-1">
                    <div className="max-w-[700px] mx-auto px-2">
                        <h1 className="text-3xl font-bold">{article.title}</h1>
                        <hr className="my-5 h-0.5 border-t-0 bg-gray-300" />
                        <div
                            className="ck-content"
                            dangerouslySetInnerHTML={{ __html: article.text }}
                        ></div>
                    </div>
                </div>
            </div>
        )
    } else {
        notFound()
    }
}
