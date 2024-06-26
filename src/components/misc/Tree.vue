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
const props = defineProps({
    modelValue: Array
})
</script>

<style>
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0
}

label {
    font-weight: normal
}

/*Tree*/

.trees {
    margin-left: 10px;
}

.trees li {
    border-left: dotted 1px #bcbec0;
    padding: 1px 0 1px 25px;
    position: relative
}

.trees li>label {
    position: relative;
    left: -11px
}

.trees li:before {
    content: "";
    width: 13px;
    height: 1px;
    border-bottom: dotted 1px #bcbec0;
    position: absolute;
    top: 14px;
    left: 0
}

.trees li:last-child:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 13px;
    left: -1px;
    bottom: 0px;
}

.trees li input {
    margin-right: 5px;
    margin-left: 5px
}
</style>