import {BrowserRouter, Route} from 'react-router-dom'
import ProductDetail from '../pages/productDetail/productDetail';
import Home from '../pages/home';

const Routes=(
    <BrowserRouter>
      <div>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/productDetail' component={ProductDetail}/>
      </div>
    </BrowserRouter>
);

export default Routes;