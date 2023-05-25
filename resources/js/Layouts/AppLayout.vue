<script setup>
import Sidebar from "@/Layouts/Partials/Sidebar.vue"
import { usePage } from "@inertiajs/vue3"
import ConfirmDialog from "primevue/confirmdialog"
import DynamicDialog from "primevue/dynamicdialog"
import Toast from "primevue/toast"
import { useToast } from "primevue/usetoast"
import { watch } from "vue"

const notification = useToast()

watch(
    () => usePage().props.flash,
    (flash) => {
        if (flash) {
            notification.add({
                severity: flash.type,
                life: flash.life ?? 3000,
                summary: flash.header,
                detail: flash.message,
                group: "br",
                closable: true,
            })
        }
    },
    { deep: true }
)

watch(
    () => usePage().props.errors,
    (errors) => {
        Object.values(errors).forEach((item) => {
            notification.add({
                severity: "error",
                life: 3000,
                summary: "Error!",
                detail: item,
                group: "br",
                closable: true,
            })
        })
    }
)
</script>

<template>
    <main class="flex w-full h-screen bg-slate-100">
        <Sidebar />

        <section>
            <slot />
        </section>
    </main>

    <Toast position="bottom-right" group="br" />
    <DynamicDialog />
    <ConfirmDialog />
</template>
