import { useLocalStorage } from './useLocalStorage'

export function useTheme() {
  const theme = useLocalStorage('theme', 'light')

  function toggleTheme() {
    theme.value =
      theme.value === 'light'
        ? 'dark'
        : 'light'
  }

  return {
    theme,
    toggleTheme
  }
}