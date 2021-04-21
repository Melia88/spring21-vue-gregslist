<template>
  <div class="House col-md-4 mb-3">
    <router-link :to="{name: 'HouseDetails', params: { id:house.id }}">
      <div class="card shadow">
        <img class="card-img-top" :src="house.imgUrl" alt="">
        <div class="card-body">
          <h4 class="card-title">
            {{ house.bedrooms }} | {{ house.bathrooms }} | {{ house.levels }}
          </h4>
          <p>{{ house.price }}</p>
          <p>{{ house.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>

export default {
  // Props is the object being brought over from api & is accessed here & in the HousesPage in the v-for line w :house="house"
  name: 'House',
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
