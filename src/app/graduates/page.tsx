import Graduates from './Graduates'

export default function GraduatesPage() {
    return (
        <div className="min-h-screen pb-5 bg-gray-200">
            <div className="container">
                <Graduates
                    file={`${process.env.PUBLIC_SERVER_API}/file/graduates`}
                />
            </div>
        </div>
    )
}
