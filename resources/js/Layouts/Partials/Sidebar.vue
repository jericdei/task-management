<script setup>
import { router } from "@inertiajs/vue3"
import SidebarLink from "./SidebarLink.vue"
import Avatar from "primevue/avatar"
import { useConfirm } from "primevue/useconfirm"

const confirm = useConfirm()

const handleLogout = () => {
    confirm.require({
        header: "Confirmation",
        message: "Are you sure you want to logout?",
        accept: () => router.post("logout"),
    })
}
</script>

<template>
    <aside class="group bg-primary text-slate-100 w-1/12 hover:w-2/12">
        <div class="flex flex-col h-full items-center">
            <nav class="flex flex-col w-full gap-5 mt-24">
                <SidebarLink label="Dashboard" href="#" icon="pi pi-home" />
                <SidebarLink label="Tasks" href="#" icon="pi pi-list" />
                <SidebarLink
                    label="Priority"
                    href="#"
                    icon="pi pi-exclamation-triangle"
                />
            </nav>

            <div class="mt-auto mb-16 w-full">
                <div class="flex justify-center items-center gap-3">
                    <Avatar
                        class="bg-warning text-slate-100"
                        :label="$page.props.auth.user.initials"
                        shape="circle"
                        size="large"
                    />

                    <div class="flex-col items-center hidden group-hover:flex">
                        <p>
                            {{ $page.props.auth.user.name }}
                        </p>

                        <small>{{ $page.props.auth.user.role }}</small>
                    </div>
                </div>

                <div
                    class="mt-8 flex items-center justify-center gap-3 text-2xl py-3 px-8 bg-slate-50 bg-opacity-0 hover:bg-opacity-10 cursor-pointer"
                    @click="handleLogout()"
                >
                    <i class="pi pi-sign-out text-2xl"></i>
                    <p class="hidden group-hover:block">Logout</p>
                </div>
            </div>
        </div>
    </aside>
</template>
