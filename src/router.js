import Vue from 'vue';
import Router from 'vue-router';
import AddList from '@/components/AddList.vue'
import CompleteList from '@/components/CompleteList.vue'
import ImportantList from '@/components/ImportantList.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AddList,
    },
    {
      path: '/complete',
      component: CompleteList,
    },
    {
      path: '/important',
      component: ImportantList,
    },
    {
      path: '/*',
      redirect: '/'
    }
  ],
  mode: "history"
});
