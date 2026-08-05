import { useLocalStorage } from './useLocalStorage'
import { useFetch } from './useFetch'

export function useStudentSearch() {

  const query = useLocalStorage('student-search', '')

  const {
    data: students,
    error,
    isLoading
  } = useFetch(
    () =>
      `https://dummyjson.com/users/search?q=${query.value}`
  )

  return {
    query,
    students,
    error,
    isLoading
  }
}