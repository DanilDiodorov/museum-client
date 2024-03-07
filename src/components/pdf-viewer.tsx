'use client'

import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { BiLoader } from 'react-icons/bi'
import { Button } from './ui/button'
import Link from 'next/link'
import { Typography } from '@material-tailwind/react'
import { FaDownload } from 'react-icons/fa'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export default function PdfViewer({ file }: { file: string }) {
    const [pages, setPages] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [active, setActive] = useState<number>(1)
    const [maxPage, setMaxPage] = useState<number>(0)

    const next = () => {
        if (active === maxPage) return

        setActive(active + 1)
    }

    const prev = () => {
        if (active === 1) return

        setActive(active - 1)
    }

    useEffect(() => {
        setPages(
            <Page
                pageNumber={active}
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
    }, [active])

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setMaxPage(numPages)
        setLoading(true)
        setPages(
            <Page
                pageNumber={active}
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
                <div className="flex justify-between py-5 md:py-5 container">
                    <Link href={file} download>
                        <Button className="w-[150px] flex gap-4">
                            <FaDownload />
                            Скачать
                        </Button>
                    </Link>
                    <div className="flex items-center gap-3 justify-center">
                        <Button onClick={prev}>Назад</Button>
                        <Typography
                            placeholder="asd"
                            color="gray"
                            className="font-normal"
                        >
                            <strong className="text-gray-900">{active}</strong>{' '}
                            из{' '}
                            <strong className="text-gray-900">{maxPage}</strong>
                        </Typography>
                        <Button onClick={next}>Далее</Button>
                    </div>
                </div>
            )}
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={false}
            >
                <div className="flex flex-col gap-4 p-1">{pages}</div>
            </Document>
            {!loading && (
                <div className="flex items-center gap-3 justify-center py-10">
                    <Button onClick={prev}>Назад</Button>
                    <Typography
                        placeholder="asd"
                        color="gray"
                        className="font-normal"
                    >
                        <strong className="text-gray-900">{active}</strong> из{' '}
                        <strong className="text-gray-900">{maxPage}</strong>
                    </Typography>
                    <Button onClick={next}>Далее</Button>
                </div>
            )}
        </div>
    )
}
