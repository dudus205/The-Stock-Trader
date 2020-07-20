export const stores = {
     state: {
         money: 10000,
         stocks: [
             {id: 0, name: 'BMW', buy: 100, sell: 90},
             {id: 1, name: 'Toyota', buy: 120, sell: 110},
             {id: 2, name: 'Nissan', buy: 110, sell: 90},
             {id: 3, name: 'Fiat', buy: 130, sell: 120},
         ],
         portfolio: [
         ]
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
};