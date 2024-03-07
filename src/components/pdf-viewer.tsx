'use client'

import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { BiLoader } from 'react-icons/bi'
import { Button } from './ui/button'
import Link from 'next/link'
import { Typography } from '@material-tailwind/react'
import { FaDownload } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export default function PdfViewer({ file }: { file: string }) {
    const [pages, setPages] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [active, setActive] = useState<number>(1)
    const [maxPage, setMaxPage] = useState<number>(0)
    const [currentPageLoading, setCurrentPageLoading] = useState<boolean>(false)

    const next = () => {
        if (active === maxPage) return

        setActive(active + 1)
    }

    const prev = () => {
        if (active === 1) return

        setActive(active - 1)
    }

    useEffect(() => {
        if (active !== 1) setCurrentPageLoading(true)
        setPages(
            <Page
                pageNumber={active}
                renderAnnotationLayer={false}
                loading={false}
                renderTextLayer={false}
                onLoadSuccess={() => {
                    setCurrentPageLoading(false)
                }}
                width={2000}
                className="z-0"
            />
        )
    }, [active])

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setMaxPage(numPages)
        setCurrentPageLoading(false)
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
                <div className="flex justify-between py-5 md:py-5 px-4">
                    <Link href={file} download>
                        <Button className="w-[150px] flex gap-4">
                            <FaDownload />
                            Скачать
                        </Button>
                    </Link>
                    <div className="flex items-center gap-3 justify-center">
                        <Button onClick={prev}>
                            <IoIosArrowForward className="rotate-180" />
                        </Button>
                        <Typography
                            placeholder="asd"
                            color="gray"
                            className="font-normal"
                        >
                            <strong className="text-gray-900">{active}</strong>{' '}
                            из{' '}
                            <strong className="text-gray-900">{maxPage}</strong>
                        </Typography>
                        <Button onClick={next}>
                            <IoIosArrowForward />
                        </Button>
                    </div>
                </div>
            )}
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={false}
            >
                <div className="px-4 rounded-md overflow-hidden">{pages}</div>
            </Document>
            {currentPageLoading && (
                <div className="px-4">
                    <div className="bg-white w-full aspect-[210/297] rounded-md"></div>
                </div>
            )}
            {!loading && (
                <div className="flex items-center gap-3 justify-center py-10">
                    <Button onClick={prev}>
                        <IoIosArrowForward className="rotate-180" />
                    </Button>
                    <Typography
                        placeholder="asd"
                        color="gray"
                        className="font-normal"
                    >
                        <strong className="text-gray-900">{active}</strong> из{' '}
                        <strong className="text-gray-900">{maxPage}</strong>
                    </Typography>
                    <Button onClick={next}>
                        <IoIosArrowForward />
                    </Button>
                </div>
            )}
        </div>
    )
}
