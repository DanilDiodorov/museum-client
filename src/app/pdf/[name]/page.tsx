import PdfViewer from '@/components/pdf-viewer'

export default async function Pdf({ params }: { params: { name: string } }) {
    return <PdfViewer file={`http://185.250.46.233:3001/file/${params.name}`} />
}
