import { css } from 'aphrodite';
import * as React from 'react';
import "../App.css";
import buttons from '../sharedStyles/button';
import authForms from '../sharedStyles/auth';
import { logIn, getUser } from '../actions/authActions';
import { connect } from 'react-redux'

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '',
      formErrors: {
        email: [''],
        password: [''],
      },
      formValid: false,
      submissionStatus: null
    };
    // this binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email !== undefined) {
      this.props.history.push('/')
    }
  }

  // check if the form is valid each update
  componentDidUpdate() {
    if (!this.state.formValid) {
      if (this.state.formErrors.email.length === 0 && this.state.email && this.state.formErrors.password.length === 0 && this.state.password) {
        console.log('the form is valid!')
        this.setState({formValid: true});
      }
    }
    if (this.state.formValid) {
      if (this.state.formErrors.email.length > 0 || this.state.formErrors.password.length > 0) {
        console.log('the form is not valid!')
        this.setState({formValid: false});
      }
    }
  }

  // updates state with form changes
  handleChange(e){
    const field = e.target.name;
    const value = e.target.value;
    // check for errors in input
    const errors = this.validate(field, value);
    // grab and update the errors for the input field
    let formErrors = {...this.state.formErrors};
    formErrors[field] = errors;
    this.setState({[field]: value, formErrors});
  }

  // checks for validation errors
  validate(field, value) {
    let errors = [];
    switch (field) {
      case 'email':
        // required
        value.length === 0 ? errors.push('Email is required.'): null;
        // min length
        value.length <= 8 ? errors.push('Email must be 8 characters long.') : null;
        //max length
        value.length >= 40 ? errors.push('Email must 30 or fewer characters long.') : false;
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
  handleSubmit(e) {
    console.log('submitted?')
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password)
      .then(res=>console.log('did it do anything?',res))
      .catch(err=>this.setState({submissionStatus:err.message}));

    //todo redux thunk
  }

  render() {
    // create lists of errors
    let emailErrors = this.state.formErrors.email.map( (error, index) => {
      return error ? <li key={index} className={css(authForms.errors)}>{error}</li> : null;
    });
    let passwordErrors = this.state.formErrors.password.map( (error, index) => {
      return error ? <li key={index} className={css(authForms.errors)}>{error}</li> : null;
    });

    return (
      <div className={css(authForms.card)}>
        <h3>Welcome back!</h3>
        <form onSubmit={this.handleSubmit}>
          <input className={css(authForms.input)} type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
          <ul>{emailErrors}</ul>
          <input className={css(authForms.input)} type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
          <ul>{passwordErrors}</ul>
          <input type="submit" value="Submit" disabled={!this.state.formValid} className={css(authForms.disabled, buttons.button, buttons.linkText, buttons.linkHover)}/>
          <p className={css(authForms.errors, authForms.invalidLogin)}>{this.state.submissionStatus ? this.state.submissionStatus:null}</p>
        </form>
      </div>
    )}
  }

  function mapStateToProps(state) {
    return {user:state.user}
  }

  export default connect(mapStateToProps, { logIn, getUser })(LogIn);