<template>
  <nav class="site-header">
    <ul class="left-nav-actions">
      <li class="nav-btn"><router-link to="/">Home</router-link></li>
      <li class="nav-btn"><router-link to="/about">About Vue</router-link></li>
    </ul>
    <ul class="right-nav-actions">
      <li class="nav-btn"><router-link to="/">Sign Up</router-link></li>
      <li class="nav-btn"><router-link to="/">Sign In</router-link></li>
      <li class="nav-btn"><router-link to="/">Sign Out</router-link></li>
    </ul>
  </nav>
  <section class="site-body">
    <router-view/>
  </section>
  <footer class="site-footer">hello world</footer>
</template>

<style lang="scss">
.site-header {
  display: flex;
  justify-content: space-between;

  .left-nav-actions,
  .right-nav-actions {
    display: flex;

    .nav-btn {
      margin: 0 0.35em;
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
