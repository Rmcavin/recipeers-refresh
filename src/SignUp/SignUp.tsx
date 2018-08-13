import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import "../App.css"


class SignUp extends React.Component<{},any> {

  public render() {
    return (
      <div className={css(styles.test)}>Sign Up!</div>
    )}
  }

  const styles = StyleSheet.create({
    test: {
      color: 'blue',
    }
  })

  export default SignUp;