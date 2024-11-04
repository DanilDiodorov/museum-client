'use client'

import React from 'react'
import {
    MutationCache,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'

interface Props {
    children: React.ReactNode
}

const client = new QueryClient({
    mutationCache: new MutationCache({
        onError: (error: any) => {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            }
        },
    }),
})

export const Providers: React.FC<Props> = ({ children }) => {
    return (
        <QueryClientProvider client={client}>
            {children}
            <Toaster richColors position="top-right" />
        </QueryClientProvider>
    )
}
