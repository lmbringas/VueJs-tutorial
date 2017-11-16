<template>
  <div id="app" class="container">
    <div class="columns ">
      <Title  title="WIZARD (Weapon Inventory for Zombie Apocalypse Research & Development)"/>
    </div>
    <div class="columns">
      <Input />
    </div>
    <div class="columns">
      <List />
    </div>
  </div>
</template>

<script>
import store from './store'
import Title from './components/Title'
import Input from './components/Input'
import List from './components/List'

export default {
  store,
  name: 'app',
  components: {
    Title,
    Input,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
