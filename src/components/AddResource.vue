<template>
  <div>
    <form @submit.prevent="addResource">
      <label>Title</label>
      <input type="text" v-model="title" />
      <label>Description</label>
      <textarea v-model="description"></textarea>
      <label>Link</label>
      <input type="url" v-model="link" />
      <button @click="addResource">Add Resource</button>
    </form>
    <teleport to="body">
      <dialog-error @close-dialog="closeDialog" v-if="inputIsInvalid">
        <h3>Invalid Input</h3>
        <h4>Please enter valid Inputs</h4>
        <button @click="inputIsInvalid = false">Close</button>
      </dialog-error>
    </teleport>
  </div>
</template>

<script>
import DialogError from './DialogError.vue';

export default {
  components: { DialogError },
  inject: ['addNewResource'],
  data() {
    return {
      inputIsInvalid: false,
      title: '',
      description: '',
      link: ''
    };
  },
  methods: {
    addResource() {
      if (this.title === '' || this.description === '' || this.link === '') {
        this.inputIsInvalid = true;
        return;
      }

      this.addNewResource(this.title, this.description, this.link);
    },
    closeDialog() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
div {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 30px;
  padding: 25px;
  border-radius: 10px;
  width: 50%;
  margin: 0px auto;
  margin-top: 20px;
}
input,
textarea {
  width: 100%;
  margin: 15px 0px;
  padding: 8px;
  font-size: 16px;
}
label {
  padding-top: 10px;
}
button {
  background-color: brown;
  color: white;
  padding: 8px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
}
*:focus {
  outline: 0 !important;
}
label {
  margin-top: 10px;
}
</style>
