import { MetadataRoute } from "next"

export default function sitemap() : MetadataRoute.Sitemap {
    return [
        {
        url: 'https://www.irfanks.my.id/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
        },
        {
        url: 'https://www.irfanks.my.id/about',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
        },
        {
        url: 'https://www.irfanks.my.id/projects',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
        },
        {
        url: 'https://www.irfanks.my.id/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
        },
        {
        url: 'https://www.irfanks.my.id/cv/irfan-kurniawan-suthiono-cv.pdf',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
        },
    ]
}