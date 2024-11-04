'use client'

// import { FristImageRenderer } from '@/components/FirstImageRenderer'
import { ArticleControllerFindOneResult } from '@/services/generated'
import Link from 'next/link'
import React from 'react'

interface Props {
    article: ArticleControllerFindOneResult
}

export const ArticleItem: React.FC<Props> = ({ article }) => {
    return (
        <Link href={`/articles/${article.id}`}>
            <div className="bg-gray-200 rounded-md hover:shadow-md hover:cursor-pointer overflow-hidden">
                <div className="h-[200px] bg-gray-300">
                    {/* <FristImageRenderer htmlString={article.text} /> */}
                </div>
                <div className="p-3">
                    <div className="text-xl">{article.title}</div>
                    <div className="text-gray-700 mt-2">
                        {article.description}
                    </div>
                </div>
            </div>
        </Link>
    )
}
