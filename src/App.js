import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
