import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const allEmails = ref([
    {
      text: 'Your 7-figure plan goes bye-bye at midnight',
      active: true,
    },
    {
      text: '[WEEKEND ONLY] Get this NOW before',
      active: true,
    },
    {
      text: 'Uh-oh, your prescription is expiring',
      active: false,
    },
  ])
  const archivedEmails = ref([])

  return { count, doubleCount, increment, allEmails, archivedEmails }
})
