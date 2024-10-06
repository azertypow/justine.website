import type {Ref} from "vue";
import type {ApiSiteInfo} from "~/_utils/ApiDefinitions";

export const useAppScrollToBottom: () => Ref<'toTop' | 'toBottom'> = () => {
    return useState('useAppScrollToBottom', () => 'toTop')
}

export const useAppScrollTopPosition: () => Ref<number> = () => {
    return useState('useAppScrollTopPosition', () => 0)
}

export const useAppSiteInfo: () => Ref<null | ApiSiteInfo> = () => {
    return useState('useAppSiteInfo', () => null)
}

export const useAppActiveFilter: () => Ref<null | string> = () => {
    return useState('useAppActiveFilter', () => null)
}
export const useAppArrayOfCurrentProjectFilter: () => Ref<string[]> = () => {
    return useState('useAppArrayOfCurrentProjectFilter', () => [])
}

export const useAppShowIntro: () => Ref<boolean> = () => {
    return useState('useAppShowIntro', () => true)
}

export const useAppMapScrollTopInWindow: () => Ref<number> = () => {
    return useState('useAppMapScrollTopInWindow', () => 1)
}

export const useShowMenu: ()=>Ref<boolean> = () => useState('useShowMenu', ()=> false)
