import { StyleSheet } from 'aphrodite';

const authForms = StyleSheet.create({
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
  invalidLogin: {
    textAlign: 'center',
    padding: '5px',
    fontWeight: 'bold'
  }
})

export default authForms;