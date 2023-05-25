<script setup>
const props = defineProps({
    label: String,
    href: String,
    icon: String,
})
</script>

<template>
    <Link
        class="flex items-center justify-center group-hover:justify-start gap-3 text-2xl py-3 px-8 bg-slate-50 bg-opacity-0 hover:bg-opacity-10"
        :href="props.href"
    >
        <i class="text-2xl" :class="props.icon"></i>
        <p class="hidden group-hover:block">{{ props.label }}</p>
    </Link>
</template>
