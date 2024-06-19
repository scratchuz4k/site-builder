import { within, userEvent, expect } from '@storybook/test';
import Input from '../components/forms/Input.vue';

export default {
  title: 'Components/Input',
  tags: ["autodocs"],
  component: Input,
};

export const text = {
  args: {
    label: "Text:",
    type: "text",
    name: "text"
  }
};

export const password = {
  args: {
    label: "Password:",
    type: "password",
    name: "password"
  }
};

export const date = {
  args: {
    label: "Date:",
    type: "date",
    name: "date"
  }
};

