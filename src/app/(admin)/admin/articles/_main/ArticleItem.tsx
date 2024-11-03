import { ArticleControllerFindOneResult } from '@/services/generated'
import { Draggable } from '@hello-pangea/dnd'
import Link from 'next/link'
import React from 'react'
import { MdDragIndicator } from 'react-icons/md'

interface Props {
    article: ArticleControllerFindOneResult
    index: number
}

export const ArticleItem: React.FC<Props> = ({ article, index }) => {
    return (
        <Draggable draggableId={article.id} index={index}>
            {(provided) => (
                <Link
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    key={article.id}
                    href={`/admin/articles/${article.id}`}
                >
                    <div className="bg-gray-300 rounded-md hover:shadow-md hover:cursor-pointer p-3 flex gap-2 items-center">
                        <div className="text-3xl" {...provided.dragHandleProps}>
                            <MdDragIndicator />
                        </div>
                        <div>{article.title}</div>
                    </div>
                </Link>
            )}
        </Draggable>
    )
}
