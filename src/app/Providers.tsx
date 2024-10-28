'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props {
    children: React.ReactNode
}

const client = new QueryClient()

export const Providers: React.FC<Props> = ({ children }) => {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
