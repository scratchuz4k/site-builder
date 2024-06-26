import { reactive, ref } from 'vue'


const dragged = reactive({
    item: null,
    index: null,
    parent: null,
})

export default function useTree() {
    return {
        dragged
    }
}
