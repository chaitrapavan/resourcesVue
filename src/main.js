import { createApp } from 'vue';
import App from './App.vue';
import LearningResources from './components/LearningResources.vue';
import AddResource from './components/AddResource.vue';
import tabsComponent from './components/tabsComponent.vue';

const app = createApp(App);
app.component('learning-resources', LearningResources);
app.component('add-resource', AddResource);
app.component('tabs-component', tabsComponent);

app.mount('#app');
