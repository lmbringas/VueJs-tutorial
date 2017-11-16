<template>
    <section class="column  is-6 is-half is-offset-one-quarter">

        <button class="button is-primary is-medium  "
            @click="isComponentModalActive = true">
            Crear Nueva arma
        </button>

        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form ></modal-form>
        </b-modal>

    </section>
</template>

<script>
import ModalForm from './ModalForm'

export default {
  props:["val"],
  name: 'Input',
  components: {
            ModalForm
        },
  data() {
            return {
                isComponentModalActive: false,
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
