<template>
  <div class="tabs">
    <button
      @click="selectComponent('storedResources')"
      :class="selectStoredResources"
    >
      Stored Resources
    </button>
    <button @click="selectComponent('AddResource')" :class="selectAddResource">
      Add Resource
    </button>
    <keep-alive>
      <component :is="componentSelection"> </component>
    </keep-alive>
  </div>
</template>

<script>
import storedResources from './storedResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    storedResources,
    AddResource
  },
  data() {
    return {
      componentSelection: 'storedResources',
      storedResources: [
        {
          id: 'officical-guide',
          title: 'Officical-guide',
          description: 'The official Vue.js decumentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Google is a search Engine',
          link: 'https://google.org'
        }
      ]
    };
  },
  computed: {
    selectStoredResources() {
      return this.componentSelection === 'storedResources'
        ? 'Active'
        : 'notActive';
    },
    selectAddResource() {
      return this.componentSelection === 'AddResource' ? 'Active' : 'notActive';
    }
  },
  provide() {
    return {
      Resources: this.storedResources,
      addNewResource: this.AddResource,
      removeResource: this.deleteResource
    };
  },
  methods: {
    selectComponent(cmp) {
      this.componentSelection = cmp;
    },
    AddResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString,
        title: title,
        description: description,
        link: link
      };
      this.storedResources.push(newResource);
      this.componentSelection = storedResources;
      this.selectAddResource;
    },
    deleteResource(resId) {
      const Index = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(Index, 1);
    }
  }
};
</script>

<style scoped>
.tabs {
  width: 70%;
  margin: 0px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 30px;
  padding: 25px;
  border-radius: 10px;
}
.tabs button {
  padding: 8px;
  cursor: pointer;
  border: none;
}
.Active {
  background-color: brown;
  color: white;
}
.notActive {
  background-color: #a5852a;
  color: white;
}</style
>>
