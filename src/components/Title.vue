<template>
  <div class="title column ">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props:["title"],
  name: 'Title',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,{
  font-size: 3em;
}
</style>
