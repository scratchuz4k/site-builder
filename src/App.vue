<script setup>
import { ref, reactive } from 'vue'
const items = ref([
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
                component: 'column2',
                children: [
                  {
                    configs: { label: 'Username', name: 'username' },
                    component: 'input',
                  }
                ]
              },
              {
                component: 'column1',
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
])

const orderTree = (items, stat) => {
  items.sort((a, b) => {
    let catA = a.component;
    let catB = b.component;
    return stat.sortOrder == "asc" ? catB.localeCompare(catA) : catA.localeCompare(catB);
  });

  stat.sortOrder = stat.sortOrder == "asc" ? "desc" : "asc";
};
const data = reactive({
  sortOrder: 'asc'
})

const value = ref({ "name": "adaaaw", "username": "adw", "password": "wdd" })
</script>

<template>
  <builder v-model="value" :design="items"></builder>
  <button type="button" @click="orderTree(items, data)">
    <font-awesome-icon v-if="data.sortOrder == 'asc'" icon="fas fa-sort-amount-up"></font-awesome-icon>
    <font-awesome-icon v-else icon="fas fa-sort-amount-down"></font-awesome-icon>
  </button>
  <tree v-model="items">
    <template v-slot="{ element, parent, stats }">
      <div style="display: flex;justify-content: space-between;width:100%">
        <p>{{ element.component }}</p>
        <button v-if="element.children && element.children.length" type="button"
          @click="orderTree(element.children, stats)">
          <font-awesome-icon v-if="stats.sortOrder == 'asc'" icon="fas fa-sort-amount-up"></font-awesome-icon>
          <font-awesome-icon v-else icon="fas fa-sort-amount-down"></font-awesome-icon>
        </button>
      </div>
    </template>
  </tree>

  <pre>
  {{ items }}
</pre>
</template>
