<template>
  <div class="navbar">
    <button @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        console.log('here')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
}
</style>
