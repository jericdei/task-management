<script setup>
import { router, useForm } from "@inertiajs/vue3"
import InputText from "primevue/inputtext"
import Password from "primevue/password"

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
})

const handleSubmit = () => {
    form.post(route("register"), {
        onSuccess: () => router.get("dashboard"),
    })
}
</script>

<template>
    <Head title="Register" />

    <section class="grid place-items-center h-screen">
        <div class="p-16 rounded-xl bg-slate-50">
            <form @submit.prevent="handleSubmit()">
                <div class="flex flex-col gap-12">
                    <div class="p-float-label">
                        <InputText
                            v-model="form.name"
                            class="w-full"
                            :class="{ 'p-invalid': form.errors.name }"
                            id="name"
                            required
                        />

                        <small class="text-danger" v-if="form.errors.name">{{
                            form.errors.name
                        }}</small>

                        <label for="name">Name</label>
                    </div>

                    <div class="p-float-label">
                        <InputText
                            v-model="form.email"
                            class="w-full"
                            :class="{ 'p-invalid': form.errors.email }"
                            type="email"
                            id="email"
                            required
                        />

                        <small class="text-danger" v-if="form.errors.email">{{
                            form.errors.email
                        }}</small>

                        <label for="email">Email</label>
                    </div>

                    <div class="p-float-label">
                        <Password
                            v-model="form.password"
                            class="w-full"
                            :class="{ 'p-invalid': form.errors.password }"
                            input-class="w-full"
                            id="password"
                            :feedback="false"
                            toggle-mask
                            required
                            autocomplete="current-password"
                        />

                        <small
                            class="text-danger"
                            v-if="form.errors.password"
                            >{{ form.errors.password }}</small
                        >

                        <label for="password">Password</label>
                    </div>

                    <div class="p-float-label">
                        <Password
                            v-model="form.password_confirmation"
                            class="w-full"
                            :class="{
                                'p-invalid': form.errors.password_confirmation,
                            }"
                            input-class="w-full"
                            id="password_confirmation"
                            :feedback="false"
                            toggle-mask
                            required
                            autocomplete="current-password"
                        />

                        <small
                            class="text-danger"
                            v-if="form.errors.password_confirmation"
                            >{{ form.errors.password_confirmation }}</small
                        >

                        <label for="password_confirmation"
                            >Confirm Password</label
                        >
                    </div>
                </div>

                <div class="flex gap-x-5 items-center justify-end mt-8">
                    <Link class="underline" :href="route('login')"
                        >Already registered?</Link
                    >

                    <Button
                        type="submit"
                        label="Register"
                        @submit.prevent="handleSubmit()"
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
