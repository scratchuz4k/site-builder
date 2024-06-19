<template>
    <div class="mt-5">
        <label :for="props.name" class="block text-sm font-medium leading-6 text-gray-900">
            {{ props.label }}
        </label>
        <div class="mt-2">
            <div v-if="props.name"
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input :type="props.type ?? 'text'" name="username" :id="props.name"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    :placeholder="props.placeholder" v-model="props.modelValue[props.name]"/>
            </div>
            <small v-else class="text-xs font-medium text-rose-600"> No Name set</small>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    class: {
        required: false,
        default: {}
    },
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
        default: "text",
    },
    help: String,
    name: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        required: false,
        default: {}
    },
})

const emit = defineEmits(["update:modelValue"]);
const updateData = (ev) => {
    emit("update:modelValue", ev.target.value);
};
</script>