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
        <div className="bg-gray-200 py-5">
            <div className="px-1">
                <div className="max-w-[700px] mx-auto bg-white border md:px-5 px-3">
                    <h1 className="text-3xl font-bold py-2">{article.title}</h1>
                    <div
                        className="ck-content"
                        dangerouslySetInnerHTML={{ __html: article.text }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
