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
