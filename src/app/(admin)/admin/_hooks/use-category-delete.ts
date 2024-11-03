import { categoryControllerRemove } from '@/services/generated'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCategoryDelete = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['categoryDelete'],
        mutationFn: categoryControllerRemove,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['categories'],
            })
        },
    })
}
