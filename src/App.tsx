import './App.css';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import Splash from './Splash/Splash';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';
import { BrowserRouter, Route } from 'react-router-dom'
import * as React from 'react';
import { Provider } from 'react-redux'

//import store from './store'


class App extends React.Component {
  public render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <div className="App">
          <NavBar />
          <Route exact={true} path="/" component={Splash}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Footer />
          </div>
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
