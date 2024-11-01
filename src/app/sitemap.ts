import { articleControllerFindAll } from '@/services/generated'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = `https://kutanaschoolmuseum.ru`

    const articles = await articleControllerFindAll()

    const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `${baseUrl}/articles/${article.id}`,
    }))

    return [
        {
            url: `${baseUrl}`,
        },
        {
            url: `${baseUrl}/letopis`,
        },
        ...articleEntries,
    ]
}
