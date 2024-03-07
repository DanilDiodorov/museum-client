'use client'

import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { BiLoader } from 'react-icons/bi'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export default function Graduates({ file }: { file: string }) {
    const [pages, setPages] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState<string>('1')

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setLoading(true)
        setPages(
            <Page
                pageNumber={1}
                renderAnnotationLayer={false}
                loading={false}
                renderTextLayer={false}
                onLoadSuccess={() => {
                    setLoading(false)
                }}
                width={2000}
            />
        )
    }

    useEffect(() => {
        setPages(
            <Page
                pageNumber={parseInt(currentPage)}
                renderAnnotationLayer={false}
                loading={false}
                renderTextLayer={false}
                onLoadSuccess={() => {
                    setLoading(false)
                }}
                width={2000}
                className="z-0"
            />
        )
    }, [currentPage])

    const years = []

    for (let i = 1949; i <= 2023; i++) {
        years.push(i)
    }

    return (
        <div className="z-0">
            {loading ? (
                <div className="pt-[300px] flex justify-center">
                    <div className="text-[60px] text-gray-600 animate-spin">
                        <BiLoader />
                    </div>
                </div>
            ) : (
                <div className="pt-5 pb-1 w-full md:w-[300px]">
                    <Select
                        value={currentPage}
                        onValueChange={(val) => setCurrentPage(val)}
                    >
                        <SelectTrigger className=" border-tarawera-950 outline-none">
                            <SelectValue placeholder="Выберите год выпуска" />
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year, index) => (
                                <SelectItem
                                    key={year}
                                    value={(index + 1).toString()}
                                >
                                    Выпуск {year} г.
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            )}
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={false}
            >
                <div className="">{pages}</div>
            </Document>
        </div>
    )
}
