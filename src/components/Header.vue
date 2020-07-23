<template>
  <div>
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
        <li @click="endDay">End Day</li>
        <li @click="dropdown = !dropdown">
          Save & Load <img class="arrow" src="https://img.icons8.com/ios/18/000000/down2.png">
          <transition name="component-fade" mode="out-in">
            <div class="dropdown-content" v-if="dropdown">
              <ul>
                <li @click="save">Save</li>
                <li @click="load">Load</li>
              </ul>
            </div>
          </transition>
        </li>
        <li class="yellow">Funds: ${{getMoney}}</li>
      </ul>
    </header>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return{
      money: 10000,
      dropdown: false,
    }
  },
  computed: {
    getMoney () {
      return this.$store.getters.getMoney;
    }
  },
  methods:{
      endDay (){
          this.$store.commit('endDay');
      },
      save (){
          this.$store.commit('save');
      },
      load (){
          this.$store.commit('load');
      }
  }
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
    border: 1px solid #e5e5e5;
    display: inline-block;
    font-size: 18px;
    box-shadow: 0 0 3px 1px #e5e5e5;
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
  li:hover, li:active {
    color: #fca311;
    cursor: pointer;
  }

  .yellow{
    color: #fca311;
    cursor: default;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid #fff;
    margin: -2px -5px -2px 0;
  }
  .yellow:hover{
    cursor: default;
  }
  .arrow{
    margin-bottom: -3px;
    width: 18px;
    height: 18px;
    display: inline-block;
  }
  .dropdown-content {
    background-color: #e5e5e5;
    position: absolute;
    z-index: 1;
    margin: 7px 0 0 4px;
    color: #000000;
  }
  .dropdown-content li{
    background-color: #e5e5e5;
    display: block;
    text-align: left;
    padding: 7px;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    font-size: 18px;
    box-shadow: 0 0 3px 1px #e5e5e5;
    width: 70px;
  }
  .dropdown-content li:hover{
    background-color: #fff;
    color: #14213d;
  }

</style>
