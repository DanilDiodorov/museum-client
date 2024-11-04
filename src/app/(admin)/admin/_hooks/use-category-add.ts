import { categoryControllerCreate } from '@/services/generated'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCategoryAdd = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['addCategory'],
        mutationFn: categoryControllerCreate,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['categories'],
            })
        },
    })
}
