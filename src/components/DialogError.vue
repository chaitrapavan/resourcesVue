<template>
  <div @click="closeDialog"></div>
  <dialog open>
    <slot> </slot>
  </dialog>
</template>

<script>
export default {
  emits: ['close-dialog'],

  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    }
  }
};
</script>

<style scoped>
dialog {
  position: fixed;
  margin: 0px auto;
  top: 20vh;
  left: 30%;
  top: 30%;
  width: 40%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 50px;
  margin: 0;
  overflow: hidden;
  text-align: center;
}
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
</style>
