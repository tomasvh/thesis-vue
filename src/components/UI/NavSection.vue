<template>
  <nav class="menu">
    <router-link :to="{name: 'Home'}" class="nav-button">Home</router-link>
    <router-link :to="{name: 'About'}" class="nav-button">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavSection'
}
</script>
<style scoped>
  .menu { 
		position: fixed;
    width: 100%;
    top: 5vh;
    left: 0;
    right:0 ;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-bottom: 3px outset darkblue;
	}

  .nav-button {
    color: red;
    background-color: black;
    border-radius: 10px;
    margin: 5px;
    border: 1px solid red;
    cursor: pointer;
    padding: 5px;
  }

  .nav-button:hover {
    box-shadow: 0 0 6px 6px darkred;
    text-decoration: none;
  }
</style>