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
                children: [
                  {
                    configs: { label: 'Nome Completo', name: 'name' },
                    component: 'input',
                  }
                ]
              },

            ],
          },
          {
            component: 'row',
            children: [
              {
                component: 'column',
                children: [
                  {
                    configs: { label: 'Username', name: 'username' },
                    component: 'input',
                  }
                ]
              },
              {
                component: 'column',
                children: [
                  {
                    configs: { label: 'Password', name: 'password' },
                    component: 'input',
                  }
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
