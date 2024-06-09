<template>
    <div class="mt-5">
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">{{ props.configs.title }}</label>
        <div class="mt-2">
            <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input type="text" name="username" id="username" autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    object: {
        required: false,
        default: null
    },
    endpoint: {
        required: false,
        default: false
    },
    class: {
        required: false,
        default: {}
    },
    configs: {
        required: false,
        default: {}
    }
})
</script>