import type {SettingsModel} from "~/types/settings";

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<SettingsModel>({
    editor: {
      bgPattern: 'dots',
      bgColor: '#FFFFFF'
    }
  })
  const isGetSettingsLoading = ref(false)
  const isUpsertSettingsLoading = ref(false)

  const getSettings = () => {
    isGetSettingsLoading.value = true;

    return $fetch('/api/settings', {method: "GET"})
      .then((response: any) => {
        if (response[0].settings)
          settings.value = response[0].settings;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        isGetSettingsLoading.value = false;
      })
  }

  const upsertSettings = () => {
    isUpsertSettingsLoading.value = true

    return $fetch('/api/settings', {method: 'PUT', body: {settings: settings.value}})
      .then((response) => {})
      .catch((error) => console.log(error))
      .finally(() => {
        isUpsertSettingsLoading.value = false;
      })
  }

  return {
    settings,
    isGetSettingsLoading,
    getSettings,
    upsertSettings
  }
})