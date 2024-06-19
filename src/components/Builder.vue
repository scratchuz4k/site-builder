<script setup>
const { endpoint, modelValue, design } = defineProps({
    modelValue: {
        required: false,
        default: {}
    },
    design: {
        required: true,
    },
    endpoint: {
        required: false,
        default: false
    }
})
</script>

<template>
    <template v-for="(item, key) in design" :key="item">
        <component :is="item.component" v-bind="{
            endpoint: endpoint,
            modelValue: modelValue,
            class: item.class,
            ...item.configs
        }">
            <builder v-if="item.children && item.children.length" v-bind="{
                endpoint: endpoint,
                modelValue: modelValue,
                design: item.children
            }" />
        </component>
    </template>
</template>