<template>
  <div class="house-details">
    <h1> Hello From House Details</h1>
    <!-- Since I use route here I need to set it in return to get it to render-->
    {{ route.params.id }}
    {{ state.house }}
  </div>
</template>

<script>
import { housesService } from '../services/HousesService'
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'HouseDetails',
  setup() {
    const route = useRoute()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })
    onMounted(async() => {
      try {
        await housesService.getHouseById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      route,
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
