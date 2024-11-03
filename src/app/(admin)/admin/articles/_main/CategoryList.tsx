'use client'

import {
    categoryControllerFindAll,
    categoryControllerUpdateIndex,
    CategoryDto,
} from '@/services/generated'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { CategoryForm } from './CategoryForm'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import { CategoryItem } from './CategoryItem'
import { Accordion } from '@/components/ui/accordion'

export const CategoryList = () => {
    const { data } = useSuspenseQuery({
        queryKey: ['categories'],
        queryFn: () => categoryControllerFindAll(),
    })
    const [categories, updateCategories] = useState<CategoryDto[] | null>(null)

    useEffect(() => {
        updateCategories(data)
    }, [data])

    const handleDragEnd = async (result: any) => {
        if (!result.destination || !categories) {
            return
        }
        const updatedCategories = Array.from(categories)
        const [movedCategory] = updatedCategories.splice(result.source.index, 1)
        updatedCategories.splice(result.destination.index, 0, movedCategory)
        updateCategories(updatedCategories)

        const ids = updatedCategories.map((el) => ({ id: el.id }))

        await categoryControllerUpdateIndex(ids)
    }

    return (
        <div>
            <CategoryForm
                openButtonText={<Button>Добавить категорию</Button>}
                okButtonText="Добавить"
                modalTitle="Добавить"
                className="mt-3"
            />
            <Accordion type="single" collapsible>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="categories">
                        {(droppableProvider) => (
                            <div
                                ref={droppableProvider.innerRef}
                                {...droppableProvider.droppableProps}
                            >
                                {categories?.map((el, index) => (
                                    <CategoryItem
                                        key={el.id}
                                        category={el}
                                        index={index}
                                    />
                                ))}
                                {droppableProvider.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Accordion>
        </div>
    )
}
