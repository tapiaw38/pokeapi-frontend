<template>
  <header class="header">
    <div class="logo row justify-content-center align-items-center">
      <img src="../assets/img/pokebola.png" /> <span>Pokédex App</span>
    </div>
    <ul class="main-nav">
      <li>
        <router-link :to="{ name: 'home' }"
          ><i class="las la-home"></i
        ></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'pokemon-list' }"
          ><i class="las la-list"></i
        ></router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h2,
h3,
a {
  color: $primary;
}

.logo {
  margin: 0;
  text-transform: uppercase;
  span {
    font-size: 1.4em;
    color: $primary;
  }

  img {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.5em;
    margin-left: 00.5em;
  }
}

.main-nav {
  margin-top: 5px;
}
.main-nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
}

.main-nav a {
  color: $secondary;
  font-size: 0.8em;
}

.main-nav a:hover {
  color: $primary;
}

.main-nav i {
  font-size: 1.6em;
}

.header {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border: 1px solid $gray;
  background-color: $white;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

@media (min-width: 769px) {
  .header,
  .main-nav {
    display: flex;
  }
  .header {
    flex-direction: column;
    align-items: center;
    .header {
      width: 80%;
      margin: 0 auto;
      max-width: 1150px;
    }
  }
}

@media (min-width: 1025px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
