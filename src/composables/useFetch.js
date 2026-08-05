import { ref, watchEffect } from 'vue'

export function useFetch(url, options = {}) {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  async function execute() {
    isLoading.value = true
    error.value = null

    try {
      const res = await fetch(
        typeof url === 'function' ? url() : url,
        options
      )

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      data.value = await res.json()
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  watchEffect(execute)

  return {
    data,
    error,
    isLoading,
    refresh: execute
  }
}