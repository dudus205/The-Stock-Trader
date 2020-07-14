import StockTrader from "../components/StockTrader";
import Portfolio from "../components/Portfolio";
import Stocks from "../components/Stocks";

export const routes = [
        {path: '', component: StockTrader, name: ''},
        {path: '/portfolio', component: Portfolio, name:'portfolio'},
        {path: '/stocks', component: Stocks, name:'stocks'},
        {path: '*', name:'404', component: StockTrader}
    ]
;