import { css, StyleSheet } from 'aphrodite'
import * as React from 'react';
import "../App.css"

class Footer extends React.Component {

  render() {
    return (
      <div className={css(styles.footer)}>
        Application built by <a className={css(styles.link)} href="http://www.rachelcavin.com">Rachel Cavin</a> in 2018 using React, Redux, FireStore, and more.
      </div>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'darksalmon',
    bottom: '0',
    fontSize: '12px',
    height: '3vh',
    left: '0',
    padding: '5px',
    position: 'fixed', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    color: 'white',
    fontWeight: 'bold',
    padding: '3px',
    textDecoration: 'none',
  }
})

export default Footer;


