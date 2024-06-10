<template>
    <div class="mt-5">
        <label :for="props.name" class="block text-sm font-medium leading-6 text-gray-900">
            {{ props.label }}
        </label>
        <div class="mt-2">
            <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input :type="props.type ?? 'text'" name="username" :id="props.name"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    :placeholder="props.placeholder" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    endpoint: {
        required: false,
        default: false
    },
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
    modelValue: String,
})
</script>