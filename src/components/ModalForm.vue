<template>
    <form action="">
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Ingresar Arma</p>
            </header>
            <section class="modal-card-body">
                <span v-show="errors" >Error: No podes dejar vacio</span>
                <b-field label="Arma">
                    <b-input
                        v-model="name"
                        placeholder="Nombre del arma"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Descricion">
                    <b-input
                        v-model="description"
                        placeholder="Pequeña descripcion"
                        required>
                    </b-input>
                </b-field>

            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-primary" @click='add()'>Crear</button>
            </footer>
        </div>
    </form>
</template>

<script>
    export default {
      data:() => ({
        errors:null
      }),
      methods: {
        add() {
          if (!this.name  ||  !this.description ){
            this.errors = true
          }else {
            console.log(this.name);
            this.$parent.close()
            this.$store.commit('addWeapon', { name: this.name, description: this.description })
            this.errors = false
          }
        }
      }
    }
</script>

<style scoped>
    .modal-card {
        width: auto;
    }
</style>
