<script lang="ts">
import { mapState, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'DashboardLayout',
  computed: {
    ...mapState(useCounterStore, ['allEmails']),
    ...mapState(useCounterStore, ['archivedEmails']),
    ...mapWritableState(useCounterStore, ['dialogOpen'])
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
    <div class="dialog" v-if="dialogOpen">
      <div class="dialog__left" @click="dialogOpen = false" />
      <div class="dialog__content">
        <p class="dialog__close">Close (Esc)</p>
        <div class="dialog__nav">
          <button class="dialog__button" @click="markAsRead">Mark as read (r)</button>
          <button class="dialog__button" @click="archiveEmails">Archive (a)</button>
        </div>
        <p class="dialog__header">Your 7-figure plan goes bye-bye at midnight</p>
        <p class="dialog__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind</p>
      </div>
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
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
  &__left {
    background-color: transparent;
    width: 60%;
    min-height: 100%;
  }
  &__content {
    background-color: white;
    width: 40%;
    min-height: 100%;
    padding: 20px;
  }
  &__close {
    text-decoration: underline;
  }
  &__nav {
    margin-bottom: 30px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }
  &__button {
    color: black;
    background-color: #eee;
    padding: 12px 20px;
    margin: 5px 0;
    border-radius: 4px;
    font-weight: 500;
    border: none;
    text-align: left;
    margin-right: 30px;
    border: 1px solid #ddd;
  }
  &__header {
    font-weight: 600;
    font-size: 32px;
  }
  &__description {
    font-size: 20px;
    margin-top: 24px;
  }
}
</style>
