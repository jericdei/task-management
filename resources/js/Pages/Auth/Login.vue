<script setup>
import InputText from "primevue/inputtext"
import Password from "primevue/password"
import { Head, useForm } from "@inertiajs/vue3"

const form = useForm({
    email: "",
    password: "",
})

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    })
}
</script>

<template>
    <Head title="Log in" />

    <section class="grid place-items-center h-screen">
        <div class="border border-primary p-5 rounded-xl bg-white">
            <form @submit.prevent="submit">
                <div>
                    <label for="email" value="Email" />

                    <InputText
                        class="w-full"
                        input-id="email"
                        type="email"
                        v-model="form.email"
                        placeholder="Email"
                        required
                        autofocus
                        autocomplete="username"
                    />

                    <small
                        class="block text-danger mt-2"
                        v-text="form.errors.email"
                    />
                </div>

                <div class="mt-4">
                    <label for="password" value="Password" />

                    <Password
                        class="w-full"
                        input-class="w-full"
                        :feedback="false"
                        v-model="form.password"
                        placeholder="Password"
                        toggle-mask
                        required
                        autocomplete="current-password"
                    />

                    <small
                        class="block text-danger mt-2"
                        v-text="form.errors.password"
                    />
                </div>

                <div class="flex gap-x-5 items-center justify-end mt-4">
                    <Link class="underline" :href="route('register')"
                        >Don't have an account?</Link
                    >

                    <Button
                        type="submit"
                        label="Log in"
                        :loading="form.processing"
                    />
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
:deep(.p-icon) {
    @apply cursor-pointer;
}
</style>
