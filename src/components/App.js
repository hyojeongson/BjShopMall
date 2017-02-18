import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Addproducts from './Addproducts';
import ProductLists from './ProductLists';
import Billbox from './billbox';
import Home from './Home';
import { Router, Route, browserHistory } from 'react-router';
import Facebook from './Facebook';
import Welcome from './Welcome';

import BuyerLogin from './BuyerLogin';
import SellerLogin from './SellerLogin';
import Join from './Join';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Addproducts from './Addproducts';
import ProductLists from './ProductLists';
import Billbox from './billbox';
import KaKao from './kakao';


export default class App extends React.Component {
    render() {
        return (

          <div>
            <Addproducts></Addproducts>
            <ProductLists></ProductLists>
            <Billbox></Billbox>
          </div>

        	<Router history={browserHistory}>
        		<Route path="/" component={Home}></Route>
        		<Route path="/auth/facebook" component={Facebook}></Route>
        		<Route path="/welcome" component={Welcome}></Route>
        		<Route path="/sellerLogin" component={SellerLogin}></Route>
        		<Route path="/buyerLogin" component={BuyerLogin}></Route>
        		<Route path="/join" component={Join}></Route>
        	</Router>
        	
        )
    }
}
