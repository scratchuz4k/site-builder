<script setup>
const props = defineProps({
    modelValue: {
        required: false,
        default: {}
    },
    endpoint: {
        required: false,
        default: false
    },
    class: {
        required: false,
        default: {}
    }
})

const submit = async () => {
    const form = document.getElementById('website-form');

    const formData = new FormData(form);

    try {
        let res
        const headers = { headers: { 'Content-Type': 'multipart/form-data' } }
        if (Object.keys(modelValue).length) {
            formData.append("_method", "put")
            res = await axios.post(props.endpoint, formData, headers)
        } else {
            res = await axios.post(props.endpoint, formData, headers)
        }
        location.assign(res.data.redirect)
    } catch (err) {
        window.notyf.error(err.response.data)
    }
    return false
}
</script>

<template>
    <form id="website-form" :class="props.class" @submit.prevent="submit">
        <slot></slot>

        <form-buttons v-if="props.endpoint"></form-buttons>
    </form>
</template>