<template>
  <div class="container">
    <div class="auth">
      <h1>Welcome to Union 🏰</h1>
      <form @submit.prevent="login()">
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <div class="errors">{{ errors }}</div>
        <input type="submit" value="Login" class="submit-btn" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    login() {
      const email = this.email
      const password = this.password
      this.$store
        .dispatch('login', { email, password })
        .then(() => {
          console.log('here')
          this.$router.push(this.$route.query.redirectTo || '/')
        })
        .catch(err => {
          console.log('Errored out')
          console.log(err)
          this.errors = 'There was an error logging in, please try again.'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  min-height: 100%;
  justify-content: center;
}

.auth {
  background-color: rgb(240, 244, 250);
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  color: #333;
  padding: 30px 50px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 2px 6px rgba(200, 230, 244, 0.9);
  }
}

form {
  position: relative;
  width: 100%;

  input {
    border: 0;
    border-radius: 4px;
    display: block;
    font-size: 18px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
  }

  .submit-btn {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
}

.errors {
  color: #f00;
  font-size: 12px;
  margin-bottom: 10px;
}
</style>
