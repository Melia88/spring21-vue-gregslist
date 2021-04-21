import { AppState } from '../AppState'
import router from '../router/index.js'
import { api } from './AxiosService'
class HousesService {
  async getHouses() {
    const res = await api.get('houses')
    AppState.houses = res.data
  }

  async getHouseById(id) {
    const res = await api.get('houses/' + id)
    AppState.activeHouse = res.data
  }

  async createHouse(newHouse) {
    const res = await api.post('houses', newHouse)
    AppState.houses.push(res.data)
    // everytime a car is created, we will change pages
    router.push({ name: 'HouseDetails', params: { id: res.data.id } })
  }
}

export const housesService = new HousesService()
