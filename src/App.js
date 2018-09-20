import './App.css';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import Splash from './Splash/Splash';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';
import Feed from './Feed/Feed';
import { BrowserRouter, Route } from 'react-router-dom'
import * as React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {/* <Route exact={true} path="/" component={Splash}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/> */}
            <Route path="/" component={Feed}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

// Allows specification of which part of the store the component is passed
function mapPropsToState(state) {
    return {

    }
  }

export default connect(mapPropsToState)(App);
