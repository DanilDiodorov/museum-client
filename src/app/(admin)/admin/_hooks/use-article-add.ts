import { articleControllerCreate } from '@/services/generated'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const useArticleAdd = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ['articleAdd'],
        mutationFn: articleControllerCreate,
        onSuccess: (data) => {
            toast.success('Успешно добавлено')
            router.replace(`/admin/articles/${data.id}`)
        },
    })
}
