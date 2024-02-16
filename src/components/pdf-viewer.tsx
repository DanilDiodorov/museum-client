'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { BiLoader } from 'react-icons/bi'
import { Button } from './ui/button'
import Link from 'next/link'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export default function PdfViewer({ file }: { file: string }) {
    const [pages, setPages] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        let newPages = []
        setLoading(true)
        for (let i = 1; i <= numPages; i++) {
            newPages.push(
                <div className="" key={i}>
                    <Page
                        pageNumber={i}
                        renderAnnotationLayer={false}
                        loading={false}
                        renderTextLayer={false}
                        onLoadSuccess={() => {
                            if (i === numPages) {
                                setLoading(false)
                            }
                        }}
                        width={2000}
                    />
                </div>
            )
        }
        setPages(newPages)
    }

    return (
        <div>
            {loading ? (
                <div className="pt-[300px] flex justify-center">
                    <div className="text-[60px] text-gray-600 animate-spin">
                        <BiLoader />
                    </div>
                </div>
            ) : (
                <div className="flex justify-center py-5 md:py-5">
                    <Link href={file} download>
                        <Button className="w-[200px]">Скачать</Button>
                    </Link>
                </div>
            )}
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={false}
            >
                <div className="flex flex-col gap-4 p-1">{pages}</div>
            </Document>
        </div>
    )
}
