/** @type { import('@storybook/vue3').Preview } */
import '../src/assets/styles/main.scss'

import { setup } from '@storybook/vue3';

const components = {
  install: (app) => {
    const components = import.meta.glob("../src/components/**/*.vue", {
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

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(far);

setup((app) => {

  app.component("font-awesome-icon", FontAwesomeIcon);
  app.use(components)
});

// Rest of the file...