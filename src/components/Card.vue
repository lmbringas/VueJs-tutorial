<template>
    <section>
      <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{weapon.name}}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          {{weapon.description}}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="delate({ weapon: weapon })">Borrar</a>
      </footer>
    </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      delate:'deleteWeapon'
    }),
  },
  props:["weapon"],
  name: 'Card',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
