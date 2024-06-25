import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'

export const components = {
    install: (app) => {
        const components = import.meta.glob("./components/**/*.vue", {
            eager: true,
        });
        Object.entries(components).forEach(([path, definition]) => {
            const componentName = path
                .split("/")
                .pop()
                .replace(/\.\w+$/, "");
            app.component(componentName, definition.default);
        });
    },
};

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(far);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(components).mount('#app')
