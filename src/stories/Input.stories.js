import { within, userEvent, expect } from '@storybook/test';
import Input from '../components/forms/Input.vue';

export default {
  title: 'Components/Input',
  component: Input,  
};

export const text = {
  args: {
    label: "Text:",
    type: "text"    
  }
};

export const password = {
  args: {
    label: "Password:",
    type: "password"    
  }
};

export const date = {
  args: {
    label: "Date:",
    type: "date"
  }
};

