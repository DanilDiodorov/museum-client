import { categoryControllerCreate } from '@/services/generated'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useCategoryAdd = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['addCategory'],
        mutationFn: categoryControllerCreate,
        onSuccess: () => {
            toast.success('Успешно добавлено')
            queryClient.invalidateQueries({
                queryKey: ['categories'],
            })
        },
    })
}
