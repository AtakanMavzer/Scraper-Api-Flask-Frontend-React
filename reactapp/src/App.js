import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Products from './pages/Products'
import MainPage from './pages/MainPage'
import './App.css';





function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path = "/Products">
  
          <Products/>
        </Route>
        
      </Switch>
    </Router>
  );
}
export default App;
