import type {ApiPageContact, ApiPageContent, ApiSiteInfo} from "~/_utils/ApiDefinitions";

// const apiBaseUrl = 'http://localhost:8000'
const apiBaseUrl = 'https://justine.sdrvl.ch'

export async function fetchSiteInfo(): Promise<ApiSiteInfo> {
    const response = await fetch(`${apiBaseUrl}/site-info`)
    return response.json()
}


export async function fetchProjectBySlug(slug: string): Promise<ApiPageContent> {
    const response = await fetch(`${apiBaseUrl}/project-by-slug/${slug}`)
    return response.json()
}

export async function fetchContact(): Promise<ApiPageContact> {
    const response = await fetch(`${apiBaseUrl}/contact`)
    return response.json()
}





