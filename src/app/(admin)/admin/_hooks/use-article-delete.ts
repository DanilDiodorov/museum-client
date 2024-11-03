import { articleControllerRemove } from '@/services/generated'
import { useMutation } from '@tanstack/react-query'

export const useArticleDelete = () => {
    return useMutation({
        mutationKey: ['articleDelete'],
        mutationFn: articleControllerRemove,
    })
}
