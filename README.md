# Site Builder

With this you can build an website with just a json object

## Recommended Installation

Add library:

```sh
npm install @scratchuz4k/site-builder
```

Add to vue:

```js
import { components } from "@scratchuz4k/site-builder";
import "@scratchuz4k/site-builder/dist/style.css";

app.use(components).mount("#app");
```

## List of current Components

- Forms
  - Form
  - FormButton
  - InputText
- Layout
  - Column
  - Row
  - Content


## Example

```js
<script setup>
const items = [
  {
    component: 'content',
    class: ['mt-10'],
    children: [
      {
        component: 'form',
        class: ['mt-10'],
        children: [
          {
            component: 'row',
            children: [
              {
                component: 'column',
                children: [{  configs: { title: 'Nome Completo' },  component: 'input-text',}
                ]
              },

            ],
          },
          {
            component: 'row',
            children: [
              {
                component: 'column',
                children: [{  configs: { title: 'Username' },  component: 'input-text',}
                ]
              },
              {
                component: 'column',
                children: [ { configs: { title: 'Password' }, component: 'input-text',}
                ]
              }

            ],
          },
          {
            component: 'form-buttons',
          }
        ]
      }
    ]
  }

]
</script>

<template>
  <builder :object="{}" :design="items"></builder>
</template>
```
