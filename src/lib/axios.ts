import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

/* Criando uma lentidão na requisição local para simular um ambiente de produção */

if (import.meta.env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return config
  })
}
