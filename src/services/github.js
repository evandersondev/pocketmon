import { create } from 'axios'

const api = create({
  baseURL: `http://api.github.com/users/`,
})

export default {
  async getInfoUser(name) {
    const response = api.get(name)
    console.log(response)
  },
}
