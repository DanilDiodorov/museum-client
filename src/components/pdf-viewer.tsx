'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export default function PdfViewer() {
    const [pages, setPages] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)

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
        <>
            <Document
                file={`http://185.250.46.233:3001/file/history-of-school`}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={false}
            >
                <div className="flex flex-col gap-4 p-1 md:p-10">{pages}</div>
            </Document>
        </>
    )
}
