import { createStore } from 'vuex';
import toast from './modules/toast'

const store = createStore({
    modules:{
        toast,
    },
})
export default store