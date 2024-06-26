
import Tree from '../components/misc/Tree.vue';
import TreeContent from '../components/misc/TreeContent.vue';
import { ref } from 'vue';

export default {
    title: 'Components/Tree',
    description: "Hello World",
    tags: ["autodocs"],
    component: Tree,
    parameters: {
        docs: {
            subtitle: "The fastest way to display information in a tree structure.",
            description: {
                story: `To start the presentation, insert an array of items. Each item in the array may include a <i><strong>children</strong></i> property, which represents sub-items.`,
        }
        }
    },
};


export const Main = {
    render: (args) => ({
        components: { Tree, TreeContent },
        setup() {
            const items = ref([{
                component: 'template', children: [{ component: 'breadcrumbs', children: [] }, {
                    component: 'form', children: [{ component: 'title', class: ["mt-10"], children: [] }, {
                        component: 'row', children: [{ component: 'column', children: [{ configs: { label: 'Nome Completo', name: 'name' }, component: 'input', }] },
                        ],
                    }, { is_selected: true, component: 'form-buttons', }]
                }]
            }, {
                component: 'row', children: [{ component: 'column2', children: [{ configs: { label: 'Username', name: 'username' }, component: 'input', }] }, { component: 'column1', children: [{ configs: { label: 'Password', name: 'password' }, component: 'input', }] }
                ],
            }])

            const orderTree = (items, stat) => {
                items.sort((a, b) => {
                    let catA = a.component;
                    let catB = b.component;
                    return stat.sortOrder == "asc" ? catB.localeCompare(catA) : catA.localeCompare(catB);
                });

                stat.sortOrder = stat.sortOrder == "asc" ? "desc" : "asc";
            };
            return { items, orderTree };
        },
        template: `
        <Tree v-model="items">
            <template v-slot="{ element, parent, stats }">
                <div style="display: flex;justify-content: space-between;width:100%">
                    <div style="display: flex;align-items: center;">
                        <input type="checkbox" :checked="element.is_selected" style="width: 14px; height: 14px" />
                        <p>{{ element.component }}</p>
                    </div>
                    <button v-if="element.children && element.children.length" type="button" @click="orderTree(element.children, stats)">
                        <font-awesome-icon v-if="stats.sortOrder == 'asc'" icon="fas fa-sort-amount-up"></font-awesome-icon>
                        <font-awesome-icon v-else icon="fas fa-sort-amount-down"></font-awesome-icon>
                    </button>
                </div>
            </template>
        </Tree>`,
    }),
};