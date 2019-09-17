import BlockForm from './components/block-form.vue';
export default BlockForm;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('block-form', BlockForm);
}
