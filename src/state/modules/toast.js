import { useToast } from 'vue-toastification'
export const state = {
    toastFc: useToast()
}
export default {
    state,
    namespaced: true
}