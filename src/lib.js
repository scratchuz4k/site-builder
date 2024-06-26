import './assets/styles/main.scss'
import Tree from './components/misc/Tree.vue';
const Components = {
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

export { Tree, Components }

