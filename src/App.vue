<template>

  <router-view />

</template>
<script>
export default {
  data() {
    return {
      user: null,
      isLoggedIn: false
    }
  },
  mounted() {
    this.setUser()
    //this.logout()
  },
  methods: {
    setUser() {
      this.user = JSON.parse(localStorage.getItem('user'))
      this.isLoggedIn = localStorage.getItem('token')

    },
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.setUser()

      this.$router.push('/login')
    }
  }
}
</script>
