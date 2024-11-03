import { articleControllerCreate } from '@/services/generated'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useArticleAdd = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ['articleAdd'],
        mutationFn: articleControllerCreate,
        onSuccess: (data) => {
            router.replace(`/admin/articles/${data.id}`)
        },
    })
}
