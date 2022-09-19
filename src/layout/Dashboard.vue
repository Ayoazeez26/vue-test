<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
// import { useRouter, useRoute } from 'vue-router';
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'DashboardLayout',
  computed: {
    ...mapState(useCounterStore, ['allEmails']),
    ...mapState(useCounterStore, ['archivedEmails'])
  },
}
</script>
<template>
  <main class="dashboard">
    <div class="dashboard__sidebar">
      <nav class="dashboard__items">
        <RouterLink to="/" class="dashboard__item">Inbox ({{ allEmails.length }})</RouterLink>
        <RouterLink to="/archive" class="dashboard__item">Archive ({{ archivedEmails.length }})</RouterLink>
      </nav>
      <button class="dashboard__logout">Logout</button>
    </div>
    <div class="dashboard__main">
      <p class="dashboard__header">{{ $route.meta.pageTitle }}</p>
      <RouterView></RouterView>
    </div>
  </main>
</template>
<style scoped lang="scss">
.dashboard {
  background-color: white;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  &__sidebar {
    background-color: grey;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    max-width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__items {
    display: flex;
    flex-direction: column;
  }
  &__item {
    color: black;
    background-color: white;
    padding: 12px 0 12px 20px;
    margin: 5px 0;
    border-radius: 8px;
    font-weight: 500;
  }
  &__logout {
    color: black;
    background-color: white;
    padding: 12px 0 12px 20px;
    margin: 5px 0;
    border-radius: 8px;
    font-weight: 500;
    border: none;
    text-align: left;
  }
  &__main {
    width: calc(100% - 250px);
    padding-left: 32px;
    padding-right: 32px;
  }
  &__header {
    font-size: 3rem;
  }
}
</style>
