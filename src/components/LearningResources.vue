<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button @click="removeResource(id)">Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resources</a>
    </nav>
  </li>
</template>
<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['removeResource']
};
</script>
<style scoped>
li {
  width: 70%;
  margin: 0px auto;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 30px;
  padding: 25px;
  border-radius: 10px;
}
header {
  display: flex;
  justify-content: space-between;
}
p,
nav {
  margin-top: 20px;
  font-size: 16px;
}
nav a {
  color: tomato;
  text-decoration: none;
}
button {
  background-color: brown;
  color: white;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
}
</style>
