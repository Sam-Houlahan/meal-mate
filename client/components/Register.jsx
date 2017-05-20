import React from 'react'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.saveUser(this.state.user)
  }

  handleChange (evt) {
    let user = {...this.state.user}
    user[evt.target.name] = evt.target.value
    this.setState({user})
  }
  render () {
    return (
      <div className='registerform' >
        <h3> Register </h3>
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label for='username'>User name: </label> <br />
          <input type='email' placeholder='Enter your email for username' name='email' onChange={evt => this.handleChange(evt)} /> <br />
          <label for='password'>Password: </label><br />
          <input type='text' placeholder='Enter your password' name='password' onChange={evt => this.handleChange(evt)} /><br />
          <input type='submit' value='Join now' />
        </form>
      </div>
    )
  }
}
export default Register
