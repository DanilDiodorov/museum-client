import { ArticleForm } from '../_main/ArticleForm'

interface Props {
    searchParams?: {
        categoryId?: string
    }
}

export default function Page({ searchParams }: Props) {
    return (
        <div className="container">
            {searchParams?.categoryId && (
                <ArticleForm categoryId={searchParams.categoryId} />
            )}
        </div>
    )
}
