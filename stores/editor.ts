
export const useEditorStore = defineStore('editor', () => {
  const editorArea = ref<HTMLElement | null>(null);

  return {
    editorArea
  }
})