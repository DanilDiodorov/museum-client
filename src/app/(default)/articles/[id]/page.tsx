'use server'

import { articleControllerFindOne } from '@/services/generated'

interface Props {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props) {
    const article = await articleControllerFindOne(id)
    return {
        title: article.title,
        description: article.description,
    }
}

export default async function Page({ params: { id } }: Props) {
    const article = await articleControllerFindOne(id)

    return (
        <div className="container ">
            <div className="max-w-[600px] mx-auto bg-white">
                <div className="text-3xl font-bold py-3">{article.title}</div>
                <div
                    className=".ck-content"
                    dangerouslySetInnerHTML={{ __html: article.text }}
                ></div>
            </div>
        </div>
    )
}
