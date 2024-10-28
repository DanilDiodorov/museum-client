import PdfViewer from '@/components/PdfViewer'

export default async function Pdf({ params }: { params: { name: string } }) {
    return (
        <PdfViewer
            file={`${process.env.PUBLIC_SERVER_API}/file/${params.name}`}
        />
    )
}
