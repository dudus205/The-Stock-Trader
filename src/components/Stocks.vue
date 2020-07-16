<template>
        <ul id="content">
            <h1><b>Stocks</b></h1>
            <li id="card" v-for="stock in stocks" :key="stock.name">
                <b>{{stock.name}}</b>
                <div class="value">
                    <p>Buy: {{stock.buy}}, Sell: {{stock.sell}}</p>
                </div>
                <hr>
                <label>
                    <p>Amount:</p>
                    <input type="number" :id="stock.id">
                </label>
                <button @click="buy(stock.id)">Buy!</button>
            </li>
        </ul>
</template>

<script>
    export default {
        name: "Stocks",
        data (){
            return{
                stocks: [],
                portfolio: [],
                money: 0,
            }
        },
        mounted: function(){
            this.stocks = this.$store.getters.getStocks;
            this.portfolio = this.$store.getters.getPortfolio;
            this.money = this.$store.getters.getMoney;
        },
        methods: {
            buy(id){
                let amount = this.stocks[id-1].buy*document.getElementById(id).value;

                console.log(amount);
            }
        }
    }
</script>

<style scoped>
    #content{
         background-color: #ffffff;
         color: #000;
         width: calc(100% - 20px);
         padding: 10px 15px;
         margin: 15px auto;
         border-radius: 5px;
         border: 1px solid #e5e5e5;
         display: inline-block;
         font-size: 16px;
         text-align: center;
         box-shadow: 0 0 3px 1px #e5e5e5;
     }
    ul, li {
        margin: 0;
        padding: 0;
        display: inline-block;
        text-align: left;
        float:left;
    }
    li {
        width: calc(50% - 38px);
        padding: 10px;
        margin: 7px;
        background-color: #e5e5e5;
        border-radius: 5px;
        border: 1px solid #14213d;
        box-shadow: 2px 2px 5px 0 #000;
    }
    .value{
        float: right;
        text-align: left;
        font-size: 13px;
        margin-left: 10px;
    }
    hr{
        margin: 10px 0 15px 0;
    }
    button{
        background-color: #fca311;
        border: 1px solid #fca311;
        opacity: 0.9;
        font-size: 17px;
        border-radius: 3px;
        margin: 0 10px;
        padding: 3px 5px;
    }
    button:hover{
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
    }
    button:active{
        transform: translateY(2px);
    }
    p{
        font-size: 13px;
        margin: 2px 0;
        padding: 0;
    }
</style>