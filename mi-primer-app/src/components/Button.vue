<template>
  <div>
    <h1>Usted clikeo {{ count }} veces</h1>
    <button v-on:click="onclick">Click </button>
  </div>
</template>

<script>
export default {
  props:['initial_count'],
  name: 'Button',
  data () {
    {var q = {"count": 0}; return q;}
  },
  methods: {
    "onclick": function() {
        console.log(this.count);
        this.count = this.count + 1;
    }
  },
  mounted: function() {
    this.count = this.initial_count;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
