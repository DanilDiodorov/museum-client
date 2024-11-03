import { CategoryDto } from '@/services/generated'
import React from 'react'
import { ArticleList } from './ArticleList'
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { CategoryForm } from './CategoryForm'
import { Edit } from 'lucide-react'
import { Draggable } from '@hello-pangea/dnd'
import { MdDragIndicator } from 'react-icons/md'

interface Props {
    category: CategoryDto
    index: number
}

export const CategoryItem: React.FC<Props> = ({ category, index }) => {
    return (
        <Draggable draggableId={category.id} index={index}>
            {(provided) => (
                <AccordionItem
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    key={category.id}
                    value={category.id}
                >
                    <AccordionTrigger>
                        <div className="flex gap-3 items-center">
                            <div
                                className="flex gap-2 items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div
                                    className="text-3xl"
                                    {...provided.dragHandleProps}
                                >
                                    <MdDragIndicator />
                                </div>
                                <CategoryForm
                                    category={category}
                                    openButtonText={<Edit />}
                                    okButtonText="Сохранить"
                                    modalTitle="Редактировать"
                                />
                            </div>
                            {category.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ArticleList
                            articles={category.article}
                            categoryId={category.id}
                        />
                    </AccordionContent>
                </AccordionItem>
            )}
        </Draggable>
    )
}
