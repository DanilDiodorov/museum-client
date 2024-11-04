import { authControllerSession } from '@/services/generated'
import { useQuery } from '@tanstack/react-query'

export const useGetSession = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['session'],
        queryFn: authControllerSession,
    })

    return { user: data, isLoading }
}
