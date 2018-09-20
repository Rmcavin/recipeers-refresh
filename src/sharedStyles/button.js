import { StyleSheet } from 'aphrodite';

const buttons = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '4px',
    margin: '0 5px',
    padding: '8px',
    width: '65px',
    outline: 'none'
  },
  linkText: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  linkHover: {
    ':hover': {
      textDecoration: 'underline',
    }
  },
})

export default buttons;