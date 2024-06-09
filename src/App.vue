<script setup>
const items = [{
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
              configs: { title: 'Nome Completo' },
              component: 'input-text',
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
              configs: { title: 'Username' },
              component: 'input-text',
            }
          ]
        },
        {
          component: 'column',
          children: [
            {
              configs: { title: 'Password' },
              component: 'input-text',
            }
          ]
        }

      ],
    },
    {
      title: '',
      component: 'form-buttons',
    }
  ]
}
]
</script>

<template>
  <builder :object="{}" :design="items"></builder>
</template>
