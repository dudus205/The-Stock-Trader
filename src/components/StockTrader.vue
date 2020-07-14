<template>
    <div>
        <h1>Stock trader</h1>
        <p>You can save and load state.</p>
        <p>Click "End Day" to start new day!</p>
        <hr>
        <p>Your funds: {{money}}</p>
    </div>
</template>

<script>
    export default {
        name: "StockTrader",
        data: function () {
            return{
                money: 10000,
            }
        },
    }
</script>

<style scoped>
    div{
        background-color: #ffffff;
        color: #000;
        width: calc(100% - 20px);
        padding: 2px 15px;
        margin-top: 15px;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        display: inline-block;
        font-size: 16px;
    }
</style>