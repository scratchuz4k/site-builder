<template>
    <li :class="[
        dragged.item === props.modelValue ? 'selected' : '',
        props.modelValue.children && props.modelValue.children.length ? 'has-child' : ''
    ]">
        <div :class="['tree-content', showParentPlaceHolder ? 'hovered' : '']" @dragstart="dragStart($event)">
            <div draggable="true" @dragover="dragOverParent($event)" @drop="drop($event, props.parent, props.index)"
                style="width: 8px" @dragleave="dragEndParent()">
                <button style="margin-left: -8px" :class="{
                    hide: !(props.modelValue.children && props.modelValue.children.length),
                }" @click="() => (show = !show)">
                    <font-awesome-icon v-if="show" :icon="['fas', 'square-minus']" />
                    <font-awesome-icon v-else :icon="['fas', 'square-plus']" />
                </button>
            </div>
            <div class="tree-item" draggable="true" @dragleave="dragEnd()" @dragover="dragOver($event)"
                @drop="drop($event, props.modelValue, 0)">
                <slot :element="props.modelValue" :parent="props.parent" :stats="stats"></slot>
            </div>
        </div>
        <ul v-if="showPlaceHolder">
            <li>
                <div class="tree-placeholder"></div>
            </li>
        </ul>
        <ul v-if="show" v-for="(child, childIndex) in props.modelValue.children">
            <TreeContent v-model="props.modelValue.children[childIndex]" :parent="props.modelValue" :index="childIndex">
                <template v-slot="{ element, parent, stats }">
                    <slot :element="element" :parent="parent" :stats="stats"></slot>
                </template>
            </TreeContent>
        </ul>
    </li>
</template>
<script setup>
import { ref, reactive } from "vue";
import useTree from "../../composables/useTree";
const { dragged } = useTree();

const props = defineProps({
    index: Number,
    parent: Object,
    modelValue: Object,
});

const showParentPlaceHolder = ref(false);
const showPlaceHolder = ref(false);
const show = ref(true);
const stats = reactive({
    sortkey: props.index,
    sortOrder: "asc"
});

const dragStart = (event) => {
    show.value = false;
    dragged.item = props.modelValue;
    dragged.index = props.index;
    dragged.parent = props.parent;
    event.dataTransfer.effectAllowed = "move";
};

const dragEnd = () => {
    showPlaceHolder.value = false;
};
const dragEndParent = () => {
    showParentPlaceHolder.value = false;
};

const dragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    showPlaceHolder.value = true;
};

const dragOverParent = () => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    showParentPlaceHolder.value = true;
};

const drop = (event, item, index) => {
    event.preventDefault();
    showParentPlaceHolder.value = false;
    showPlaceHolder.value = false;

    if (item === dragged.item) {
        return;
    }
    show.value = true;

    if (Object.keys(dragged.parent).includes("children")) {
        dragged.parent.children.splice(dragged.index, 1);
    }

    if (Array.isArray(dragged.parent)) {
        dragged.parent.splice(dragged.index, 1);
    }

    if (Array.isArray(item)) {
        item.splice(index, 0, dragged.item);
    } else {
        if (Object.keys(item).includes("children")) {
            item.children.splice(index, 0, dragged.item);
        } else {
            item.children = [];
            item.children.splice(index, 0, dragged.item);
        }
    }

    dragged.item = null;
    dragged.parent = null;
    dragged.index = null;
};


</script>

<style scoped>
.hide {
    opacity: 0;
    pointer-events: none;
}

.selected {
    background-color: azure;
}

.hovered {
    background: antiquewhite;
}

.tree-content {
    cursor: pointer;
    display: flex;
    align-items: center
}

.tree-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%
}

.tree-placeholder {
    border: dotted 1px #bcbec0;
    background: antiquewhite;
    height: 20px
}
</style>
