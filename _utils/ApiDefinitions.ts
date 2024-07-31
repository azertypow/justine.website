export type ApiSiteInfo = {
    projectsInfos: {
        src: string
        title: string
        year: string
        category: ApiCategories
        slug: string
        subtitle: string,
    }[]
}

export type ApiCategories = "Cie Théâtre En Quete" | "Actrice" | "Écriture"

export type ApiPageContent = {
    title: string
    category: ApiCategories
    intro?: string
    imageCover: string
    content: (ApiPageContentTitle | ApiPageContentBody | ApiPageContentImage)[]
}

export type ApiPageContentTitle = {
    type: 'title'
    level: 'h2' | 'h3'
    value: string
}

export type ApiPageContentBody = {
    type: 'body'
    content: string
}

export type ApiPageContentImage = {
    type: 'image'
    src: string
    isFull: boolean
}
