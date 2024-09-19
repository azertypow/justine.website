export type ApiSiteInfo = {
    'tags': {
        "title": string,
        "uuid": string,
        "uri": string,
        "slug": string
    }[]
    projectsInfos: {
        cover: ApiImage[]
        title: string
        date: string
        tags: ApiTags[]
        slug: string
        subtitle: string
    }[]
}

export type ApiImage = {
    "caption": string | null,
    "alt": string | null,
    "link": string | null,
    "photoCredit": string | null,
    "url": string,
    "mediaUrl": string,
    "width": number,
    "height": number,
    "resize": {
        "tiny": string,
        "small": string,
        "reg": string,
        "large": string,
        "xxl": string
    }
}

export type ApiTags = {
    "title":    string
    "uid":      string
    "uuid":     string
    "uri":      string
}

export type ApiPageContent = {
    title: string
    subtitle: string
    tags: ApiTags[]
    introduction?: string
    cover: ApiImage[]
    htmlcontent: (ApiPageContentTitle | ApiPageContentBody | ApiPageContentImage)[]
    galleryproject: ApiPageContentImage[]
}

export type ApiPageContentTitle = {
    type: 'heading'
    content: {
        level: 'h2' | 'h3'
        text: string
    },
    id: string,
    isHidden: boolean,
}

export type ApiPageContentBody = {
    type: 'text'
    content: {
        'text': string
    }
}

export type ApiPageContentImage = {
    "type": "image",
    //---
    "content": {
        "image": string[],
        "isfullwidth": "false" | "true"
    },
    "id": string,
    "isHidden": false,
    "images": ApiImage[]
}
