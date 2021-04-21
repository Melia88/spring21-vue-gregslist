<template>
  <div class="housesPage container">
    <div class="row">
      <div class="col py-3">
        <h2>Houses</h2>
        <button title="Open Create House Form"
                type="button"
                class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#new-house-form"
        >
          <i class="fas fa-plus" aria-hidden="true"></i>
        </button>
        <CreateHouseModal />
      </div>
    </div>
    <div class="row">
      <House v-for="house in state.houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import House from '../components/HouseComponent'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import CreateHouseModal from '../components/CreateHouseModal'

export default {
  name: 'HousesPage',
  setup() {
    // step 2 in this page
    const state = reactive({
      houses: computed(() => AppState.houses)
    })
    onMounted(async() => {
      // step 1 in this page
      try {
        await housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // step 3 in this page
      state
    }
  },
  components: {
    House,
    CreateHouseModal
  }
}
</script>

<style lang="scss" scoped>
</style>
