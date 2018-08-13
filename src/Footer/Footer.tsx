import { css, StyleSheet } from 'aphrodite'
import * as React from 'react';
import "../App.css"

class Footer extends React.Component {

  public render() {
    return (
      <div className={css(styles.footer)}>
        <div>Application built by Rachel Cavin in 2018 using React, Redux, MongoDB, Express, and more.</div>
        <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>, and <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'darksalmon',
    bottom: '0',
    fontSize: '12px',
    height: '5vh',
    left: '0',
    padding: '5px',
    position: 'fixed', 
    width: '100%'
  },
  link: {

  }
})

export default Footer;


