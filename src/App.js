import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Payments from './pages/Payments/Payments';
import Shipping from './pages/Shipping/Shipping';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './pages/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/payment'>
              <Payments></Payments>
            </Route>
            <Route exact path='/shipping'>
              <Shipping></Shipping>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
