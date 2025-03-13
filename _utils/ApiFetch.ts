import type {ApiPageAbout, ApiPageContact, ApiPageContent, ApiSiteInfo, ApiTextIntro} from "~/_utils/ApiDefinitions";

// const apiBaseUrl = 'http://localhost:8000'
const apiBaseUrl = 'https://justine.sdrvl.ch'

export async function fetchTextIntro(): Promise<ApiTextIntro> {
    const response = await fetch(`${apiBaseUrl}/text-intro`)
    return response.json()
}


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

export async function fetchAPropos(): Promise<ApiPageAbout> {
    const response = await fetch(`${apiBaseUrl}/about`)
    return response.json()
}


