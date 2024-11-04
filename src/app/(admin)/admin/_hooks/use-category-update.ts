import {
    categoryControllerUpdate,
    categoryControllerUpdateIndex,
    UpdateCategoryDto,
} from '@/services/generated'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Props {
    id: string
    data: UpdateCategoryDto
}

export const useCategoryUpdate = (id?: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['updateCategory'],
        mutationFn: (data: Props) =>
            categoryControllerUpdate(data.id, data.data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['categories'],
            })
        },
    })
}

export const useCategoryUpdateIndex = () => {
    return useMutation({
        mutationKey: ['updateCategoryIndex'],
        mutationFn: categoryControllerUpdateIndex,
    })
}
