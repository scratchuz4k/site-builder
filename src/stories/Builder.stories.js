import { within, userEvent, expect } from '@storybook/test';
import Input from '../components/forms/Input.vue';
import FormButtons from '../components/forms/FormButtons.vue';
import Form from '../components/forms/Form.vue';
import Title from '../components/forms/Title.vue';
import Row from '../components/layout/Row.vue';
import Column from '../components/layout/Column.vue';
import Breadcrumbs from '../components/layout/Breadcrumbs.vue';
import Template from '../components/layout/Template.vue';
import Builder from '../components/Builder.vue';

export default {
  title: 'Components/Builder',
  tags: ["autodocs"],
  component: Builder,
};

const items = [
  {
    component: Template,
    children: [
      {
        component: Breadcrumbs,
        children: []
      },
      {
        component: Form,
        children: [
          {
            component: Title,
            class: ["mt-10"],
            children: []
          },
          {
            component:Row,
            children: [
              {
                component: Column,
                children: [
                  {
                    configs: { label: 'Nome Completo', name: 'name' },
                    component: Input,
                  }
                ]
              },

            ],
          },
          {
            component: Row,
            children: [
              {
                component: Column,
                children: [
                  {
                    configs: { label: 'Username', name: 'username' },
                    component: Input,
                  }
                ]
              },
              {
                component: Column,
                children: [
                  {
                    configs: { label: 'Password', name: 'password' },
                    component: Input,
                  }
                ]
              }

            ],
          },
          {
            component: FormButtons,
          }
        ]
      }
    ]
  }

]

export const Main = {
  args: {
    design: items,
  }
};