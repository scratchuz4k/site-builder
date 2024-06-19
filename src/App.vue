<script setup>
import { ref } from 'vue'
const items = [
  {
    component: 'template',
    children: [
      {
        component: 'breadcrumbs',
        children: []
      },
      {
        component: 'form',
        children: [
          {
            component: 'title',
            class: ["mt-10"],
            children: []
          },
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

const value = ref({ "name": "adaaaw", "username": "adw", "password": "wdd" })
</script>

<template>
  <builder v-model="value" :design="items"></builder>
</template>
