<template>
  <div v-if="weapons.length > 0" class="column">
    <div v-for="weapon in weapons" >
      <div class="margin">
        <Card :weapon='weapon' />
      </div>
    </div>
  </div>
  <div v-else class="column">
      <h1 class="subtitle" >No hay armas</h1>
  </div>
</template>

<script>
import Card from './Card'


export default {
  name: 'List',
  components: {
    Card
  },
  computed: {
    weapons (){
      return this.$store.state.weapons
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin {
  margin-top: 1rem;
}
</style>
