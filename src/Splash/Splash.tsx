import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
import buttons from '../sharedStyles/button';

class Splash extends React.Component<{},any> {
  constructor(props:any) {
    super(props)
    this.state = { userAction: null}

    this.updateSplash = this.updateSplash.bind(this);
  }

  public componentDidMount() {
    const body = document.body.style;
    body.backgroundImage= 'url("splash2.jpg")';
    body.background = 'rbga(255,255,255,0.9';
    body.backgroundRepeat= 'no-repeat';
    body.backgroundAttachment= 'fixed';
    body.backgroundPosition= 'center';
    body.backgroundSize= 'cover';
    body.overflowY = 'hidden';
  }

  public componentWillUnmount() {
    const body = document.body.style;
    body.background = "#EBEBEB";
    body.overflowY = 'initial';
  }

  public updateSplash(e:any) {
    console.log(e)
    this.setState({status:e});
  }

  public render() {
    return (
      <div className={css(styles.card, styles.smallCard)}>
        <div>
          <h2 className={css(styles.tagline)}>The social platform for recipes and meal plans.</h2>

          <div className={css(styles.buttonBar)}>
            <button id="logIn" className={css(buttons.button)}><Link to="/login" className={css(buttons.linkText, buttons.linkHover)}>Log In</Link></button>
            <button id="signUp" className={css(buttons.button)}><Link to="/signup" className={css(buttons.linkText, buttons.linkHover)}>Sign Up</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  buttonBar: {
    margin: '50px 0'
  },
  card: {
    height: '40vh',
    margin: '200px 30px',
    padding: '40px 0',
    width: '40%'
  },
  tagline: {
    color: 'white',
    textShadow: '1px 1px 1px black',
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
  },
  smallCard: {
    '@media (max-width: 768px)': {
      height: '60vh',
      margin: '40px 0px',
      padding: '0px',
      width: '100%'
    }
  }
})

export default Splash;