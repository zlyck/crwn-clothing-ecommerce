
import './App.css';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.components';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
