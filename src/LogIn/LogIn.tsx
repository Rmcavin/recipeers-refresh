import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import "../App.css"
import buttons from '../sharedStyles/button'


class LogIn extends React.Component<{},any> {
  constructor(props:any) {
    super(props);
    this.state = {
      username: '', 
      password: '',
      formErrors: {
        username: [''],
        password: ['']
      },
      formValid: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // check if the form is valid each update
  componentDidUpdate() {
    if (!this.state.formValid) {
      if (this.state.formErrors.username.length === 0 && this.state.username && this.state.formErrors.password.length === 0 && this.state.password) {
        console.log('the form is valid!')
        this.setState({formValid: true});
      }
    }
    if (this.state.formValid) {
      if (this.state.formErrors.username.length > 0 || this.state.formErrors.password.length > 0) {
        console.log('the form is not valid!')
        this.setState({formValid: false});
      }
    }
  }

  // updates state with form changes
  public handleChange(e:any){
    const field = e.target.name;
    const value = e.target.value;
    const errors = this.validate(field, value)

    let formErrors = {...this.state.formErrors}
    formErrors[field] = errors;
    // check if the form is valid

    this.setState({[field]: value, formErrors});
  }

  public validate(field:string, value:string) {
    let errors = [];
    switch (field) {
      case 'username':
        // required
        value.length === 0 ? errors.push('Username is required.'): null;
        // min length
        value.length <= 8 ? errors.push('Username must be 8 characters long.') : null;
        //max length
        value.length >= 16 ? errors.push('Username must 16 or fewer characters long.') : false;
        break;
      case 'password':
        // required
        value.length === 0 ? errors.push('Password is required.'): null;
        // min length
        value.length <= 8 ? errors.push('Password must be 8 characters long.') : null;
        //max length
        value.length >= 32 ? errors.push('Password must 32 or fewer characters long.') : false;
        break;
    }
    return errors;
  }

  // submits form
  public handleSubmit(e:any) {
    e.preventDefault();
    console.log('form submitted!', e.target)
  }

  public render() {
    // create lists of errors
    let usernameErrors = this.state.formErrors.username.map( (error:string, index:number) => {
      return error ? <li key={index} className={css(styles.errors)}>{error}</li> : null;
    });
    let passwordErrors = this.state.formErrors.password.map( (error:string, index:number) => {
      return error ? <li key={index} className={css(styles.errors)}>{error}</li> : null;
    });

    return (
      <div className={css(styles.card)}>
        <h3>Welcome back!</h3>
        <form onSubmit={this.handleSubmit}>
          <input className={css(styles.input)} type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
          <ul>{usernameErrors}</ul>
          <input className={css(styles.input)} type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
          <ul>{passwordErrors}</ul>
          <input type="submit" value="Submit" disabled={!this.state.formValid} className={css(styles.disabled, buttons.button, buttons.linkText, buttons.linkHover)}/>
        </form>
      </div>
    )}
  }

  const styles = StyleSheet.create({
    card: {
     backgroundColor: 'white',
     borderRadius: '4px',
     boxShadow: '0 8px 4px -4px #929292',
     margin: '50px auto',
     minHeight: '200px',
     padding: '50px',
     width: '50%',
    },
    input: {
      display: 'block',
      margin: '10px auto',
      padding: '10px',
      width: '60%',
      outline: 'none',
      border: 'none',
      borderBottom: '2px solid darkSalmon'
    },
    disabled: {
      ':disabled': {
        background: 'darkgrey',
        cursor: 'not-allowed',
        textDecoration: 'line-through',
      }
    },
    errors: {
      width: '60%',
      margin: 'auto',
      color: 'darkSalmon', 
      fontStyle: 'oblique',
      textAlign: 'left',
      fontSize: '12px',
    },
  })

  export default LogIn;