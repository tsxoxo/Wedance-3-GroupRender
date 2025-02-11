import { h } from 'vue';

export default {
  setup(props, { slots }) {
    return () => h('div', props, slots.default);
  },
};
