import type {Ref} from "vue";

export const useAppScrollToBottom: () => Ref<'toTop' | 'toBottom'> = () => {
    return useState('useAppScrollToBottom', () => 'toTop')
}

export const useAppScrollTopPosition: () => Ref<number> = () => {
    return useState('useAppScrollTopPosition', () => 0)
}
