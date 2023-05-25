// Main files
import "./bootstrap"
import "../css/app.css"

// PrimeVue Themes
import "primevue/resources/themes/tailwind-light/theme.css"
import "primeicons/primeicons.css"
import "primevue/resources/primevue.min.css"

// PrimeVue Config / Services
import PrimeVue from "primevue/config"
import ConfirmationService from "primevue/confirmationservice"
import DialogService from "primevue/dialogservice"
import ToastService from "primevue/toastservice"

// PrimeVue Components
import Button from "primevue/button"

// Vue
import { createApp, h } from "vue"
import { createInertiaApp, Head, Link } from "@inertiajs/vue3"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m"

// Layout
import AppLayout from "./Layouts/AppLayout.vue"

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel"

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        )

        if (!name.startsWith("Auth")) {
            page.default.layout = AppLayout
        }

        return page
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Head", Head)
            .component("Link", Link)
            .component("router-link", {
                props: ["to", "custom"],
                template: `
                    <Link :href="to">
                    <slot />
                    </Link>`,
            })
            .use(ToastService)
            .use(ConfirmationService)
            .use(DialogService)
            .component("Button", Button)
            .use(PrimeVue, { ripple: true })
            .use(ZiggyVue, Ziggy)
            .mount(el)
    },
    progress: {
        color: "#4B5563",
    },
})
