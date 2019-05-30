<template>
  <div class="container">
    <div class="auth">
      <h1>Welcome to Union 🏰</h1>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
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
}
</style>
