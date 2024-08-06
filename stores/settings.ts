export const useSettingsStore = defineStore('settings', () => {
  const isEditorBgDotsActive = ref(true)

  return {
    isEditorBgDotsActive,
  }
})