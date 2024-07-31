import type {Ref} from "vue";

export const useAppIsScrolled: () => Ref<boolean> = () => {
    return useState('useAppIsScrolled', () => false)
}
