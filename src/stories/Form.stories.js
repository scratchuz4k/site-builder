import { within, userEvent, expect } from '@storybook/test';
import Input from '../components/forms/Input.vue';
import FormButtons from '../components/forms/FormButtons.vue';
import Form from '../components/forms/Form.vue';
import Row from '../components/layout/Row.vue';
import Column from '../components/layout/Column.vue';

export default {
  title: 'Components/Form',
  component: Input,  
};

export const Main = {
  render: (args) => ({
    components: { Input, Form, Row, Column, FormButtons },
    setup() { 
      return { ...args };
    },
    template: `
      <Form v-bind="args">
        <Row>
          <Column>
          <Input type="text" label="Nome Completo"/>
          </Column>
        </Row>
        <Row>
          <Column>
          <Input type="text" label="Username"/>
          </Column>
          <Column>
          <Input type="password" label="Password"/>
          </Column>
        </Row>
        <FormButtons />  
      </Form>`,
  })
};