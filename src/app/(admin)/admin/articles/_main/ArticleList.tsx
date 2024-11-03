import {
    ArticleControllerFindAllResult,
    articleControllerUpdateIndex,
    ArticleDto,
} from '@/services/generated'
import React, { useState } from 'react'
import { ArticleItem } from './ArticleItem'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'

interface Props {
    articles: ArticleControllerFindAllResult
    categoryId: string
}

export const ArticleList: React.FC<Props> = ({ articles, categoryId }) => {
    const router = useRouter()

    const [artilceList, updateArticlesList] = useState<ArticleDto[]>(articles)

    const handleDragEnd = async (result: any) => {
        if (!result.destination || !artilceList) {
            return
        }
        const updatedArticles = Array.from(artilceList)
        const [movedCategory] = updatedArticles.splice(result.source.index, 1)
        updatedArticles.splice(result.destination.index, 0, movedCategory)
        updateArticlesList(updatedArticles)

        const ids = updatedArticles.map((el) => ({ id: el.id }))

        await articleControllerUpdateIndex(ids)
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="articles">
                    {(droppableProvider) => (
                        <div
                            ref={droppableProvider.innerRef}
                            {...droppableProvider.droppableProps}
                            className="flex flex-col gap-3"
                        >
                            {artilceList.map((el, index) => (
                                <ArticleItem
                                    key={el.id}
                                    article={el}
                                    index={index}
                                />
                            ))}
                            {droppableProvider.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <div className="flex items-center gap-2 mt-2">
                <Button
                    onClick={() => {
                        router.push(
                            `/admin/articles/add?categoryId=${categoryId}`
                        )
                    }}
                >
                    Добавить статью
                </Button>
            </div>
        </div>
    )
}
