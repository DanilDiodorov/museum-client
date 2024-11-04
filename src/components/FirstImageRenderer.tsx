'use client'

import React from 'react'

interface props {
    htmlString: string
}

export const FristImageRenderer: React.FC<props> = ({ htmlString }) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')

    // Находим первое изображение
    const img = doc.querySelector('img')

    return (
        <div className="h-full overflow-hidden flex justify-center items-center">
            {img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    className="h-full"
                    src={img.src}
                    alt={img.alt || 'Изображение'}
                />
            ) : (
                <p></p>
            )}
        </div>
    )
}
