import {
    categoryControllerUpdate,
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
