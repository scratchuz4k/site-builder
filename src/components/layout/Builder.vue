<script setup>
const { endpoint, object, design } = defineProps({
    object: {
        required: false,
        default: null
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
            object: object,
            class: item.class,
            configs: item.configs
        }">
            <builder v-if="item.children && item.children.length" v-bind="{
                endpoint: endpoint,
                object: object,
                design: item.children
            }" />
        </component>
    </template>
</template>