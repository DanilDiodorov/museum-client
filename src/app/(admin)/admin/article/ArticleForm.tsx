'use client'

import { TextEditor } from '@/components/TextEditor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArticleControllerFindOneResult } from '@/services/generated'
import React, { useState } from 'react'
import { useArticleUpdate } from '../_hooks/use-article-update'
import { useArticleAdd } from '../_hooks/use-article-add'

interface Props {
    article?: ArticleControllerFindOneResult
    categoryId?: string | null
}

export const ArticleForm: React.FC<Props> = ({ article, categoryId }) => {
    const [title, setTitle] = useState<string>(article?.title || '')
    const [text, setText] = useState<string>(article?.text || '')
    const [description, setDescription] = useState<string>(
        article?.description || ''
    )
    const { mutate: updateMutate, isPending: updateIsPending } =
        useArticleUpdate()
    const { mutate: addMutate, isPending: addIsPending } = useArticleAdd()

    const handleClick = () => {
        if (title && text && article) {
            updateMutate({
                id: article.id,
                data: {
                    title,
                    text,
                    description,
                    categoryId: article.categoryId,
                },
            })
        } else if (title && text && description && categoryId) {
            addMutate({
                title,
                text,
                description,
                categoryId,
            })
        }
    }

    return (
        <div className="w-[600px] m-auto pt-5">
            <div className="flex flex-col gap-3">
                <Input
                    placeholder="Название"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    placeholder="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextEditor value={text} onChange={(e) => setText(e)} />
                <Button
                    onClick={handleClick}
                    className="w-[300px]"
                    disabled={updateIsPending || addIsPending}
                >
                    {article ? 'Сохранить' : 'Создать'}
                </Button>
            </div>
        </div>
    )
}
