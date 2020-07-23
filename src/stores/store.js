export const stores = {
     state: {
         money: 10000,
         stocks: [
             {id: 0, name: 'BMW', buy: 100, sell: 90},
             {id: 1, name: 'Toyota', buy: 120, sell: 110},
             {id: 2, name: 'Nissan', buy: 110, sell: 90},
             {id: 3, name: 'Fiat', buy: 130, sell: 120},
         ],
         portfolio: [],
         savedMoney: 10000,
         savedStocks: [
            {id: 0, name: 'BMW', buy: 100, sell: 90},
            {id: 1, name: 'Toyota', buy: 120, sell: 110},
            {id: 2, name: 'Nissan', buy: 110, sell: 90},
            {id: 3, name: 'Fiat', buy: 130, sell: 120},
            ],
         savedPortfolio: [],
     },
    getters: {
        getMoney: state => {
            return state.money
        },
        getStocks: state => {
            return state.stocks
        },
        getPortfolio: state =>{
            return state.portfolio
        },
    },
    mutations: {
         endDay(state) {
             for(let i = 0; i < state.stocks.length; i++){
                 let rand = Math.floor((Math.random() * 25) + 1);
                 if(Math.floor((Math.random() * 2) + 1) === 1){
                     state.stocks[i].buy += rand;
                     state.stocks[i].sell += rand;
                 }
                 else{
                     state.stocks[i].buy -= rand;
                     state.stocks[i].sell -= rand;
                 }
             }
             for(let i = 0; i < state.portfolio.length; i++)
                 for(let j = 0; j < state.stocks.length; j++)
                     if(state.portfolio[i].name === state.stocks[j].name)
                         state.portfolio[i].sell = state.stocks[j].sell;
         },
         save(state) {
           state.savedPortfolio = state.portfolio;
           state.savedStocks = state.stocks;
           state.savedMoney = state.money;
         },
          load(state) {
           state.portfolio = state.savedPortfolio;
           state.stocks = state.savedStocks;
           state.money = state.savedMoney;
         },
    }
};