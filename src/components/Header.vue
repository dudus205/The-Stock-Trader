<template>
  <div id="container">
    <header id="left">
      <ul>
        <router-link tag="li" to="/">Stock Trader</router-link>
        <router-link tag="li" to="/portfolio">Portfolio</router-link>
        <router-link tag="li" to="/stocks">Stocks</router-link>
      </ul>
    </header>
    <header id="right">
      <ul>
        <li>End Day</li>
        <li>Save & Load</li>
        <li>Funds: ${{money}}</li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return{
      money: 10000,
    }
  },
}
</script>


<style scoped>
  #container{
    background-color: #e5e5e5;
    color: #000;
    width: 100%;
    padding: 2px 5px;
    margin: 0;
    border-radius: 5px;
    border: 1px solid #ffffff;
    display: inline-block;
    font-size: 18px;
  }
  #left{
    float: left;
    width: 48%;
  }
  #right{
    float: right;
    text-align: right;
    width: 48%;
  }
  ul, li{
    text-decoration: none;
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  li{
    padding: 6px 12px;
  }
  li:hover, li:active{
    color: #fca311;
    cursor: pointer;
  }
</style>
