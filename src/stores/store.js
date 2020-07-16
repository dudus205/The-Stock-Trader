export const stores = {
     state: {
         money: 10000,
         stocks: [
             {id: 1, name: 'BMW', buy: 100, sell: 90},
             {id: 2, name: 'Toyota', buy: 120, sell: 110},
             {id: 3, name: 'Nissan', buy: 110, sell: 90},
             {id: 4, name: 'Fiat', buy: 130, sell: 120},
         ],
         portfolio: [
             {id: 4, name: 'Fiat', amount: 10},
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
    }
};