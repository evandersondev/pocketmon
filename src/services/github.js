import { create } from 'axios'

const api = create({
  baseURL: `https://api.github.com/users/`,
})

export default {
  async getInfoUser(name) {
    const { data } = await api.get(name)

    if (!data) {
      return {}
    }

    return data
  },
}
