import Graduates from './Graduates'

export default function GraduatesPage() {
    return (
        <div className="container bg-gray-200 h-screen">
            <Graduates
                file={`${process.env.PUBLIC_SERVER_API}/file/graduates`}
            />
        </div>
    )
}
