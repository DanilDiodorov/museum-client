import {
    articleControllerUpdate,
    articleControllerUpdateIndex,
    UpdateArticleDto,
} from '@/services/generated'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

interface Props {
    id: string
    data: UpdateArticleDto
}

export const useArticleUpdate = (id?: string) => {
    const router = useRouter()
    return useMutation({
        mutationKey: ['updateArtcile'],
        mutationFn: (data: Props) =>
            articleControllerUpdate(data.id, data.data),
        onSuccess: (data) => {
            if (data.id !== id) {
                router.replace(`/admin/articles/${data.id}`)
            }
        },
    })
}

export const useArticleUpdateIndex = () => {
    return useMutation({
        mutationKey: ['updateArticleIndex'],
        mutationFn: articleControllerUpdateIndex,
    })
}
