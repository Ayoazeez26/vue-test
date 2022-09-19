import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
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
  const dialogOpen = ref(false);

  return { allEmails, archivedEmails, dialogOpen }
})
