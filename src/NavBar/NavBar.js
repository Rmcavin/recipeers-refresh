import { css, StyleSheet } from 'aphrodite';
import { Link } from 'react-router-dom';
import * as React from 'react';
import "../App.css"


class NavBar extends React.Component {

  render() {
    return (
      <div className={css(styles.navBar)}>
        <Link className={css(styles.appLink)} to="/"><h1 className={css(styles.appTitle)}>Recipeers</h1></Link>
        <span className={css(styles.menuOptions)}>
          <Link to="/LogIn"><button className={css(styles.navButton, styles.navHover)}>Log In</button></Link>
          <Link to="/SignUp"><button className={css(styles.navButton, styles.navHover)}>Sign Up</button></Link>
          
          
        </span>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  appLink: {
    textDecoration: 'none',
    color: 'white',
  },
  appTitle: {
    color: 'white',
    fontFamily: 'Galada',
    margin: '0',
    padding: '5px 5px 5px 10px',
    textAlign: 'left',
    textShadow: '2px 2px 1px black',
  },
  menuOptions: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px'
  },
  navBar: {
    alignContent: 'center',
    backgroundColor: 'darksalmon',
    display: 'flex',
    flexDirection: 'row',
    height: '60px',
    justifyContent: 'space-between',
    margin: '0',
  },
  navButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    height: '20px',
    color: 'white',
  },
  navHover: {
    ':hover': {
      textDecoration: 'underline',
    },
  }
})

export default NavBar;