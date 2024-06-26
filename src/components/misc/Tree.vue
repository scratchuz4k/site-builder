<template>
    <ul class="trees">
        <template v-for="(item, index) in props.modelValue">
            <TreeContent v-model="props.modelValue[index]" :parent="props.modelValue" :index="index">
                <template v-slot="{ element, parent, stats }">
                    <slot :element="element" :parent="props.parent" :stats="stats"></slot>
                </template>
            </TreeContent>
        </template>
    </ul>
</template>
<script setup>
import TreeContent from './TreeContent.vue';
const props = defineProps({
    modelValue: Array
})
</script>

<style scoped>
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0
}

label {
    font-weight: normal
}
</style>