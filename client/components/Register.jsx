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
        <div className='container'>
          <form onSubmit={(evt) => this.handleSubmit(evt)} className='form-signin'>
            <h2 className='form-signin-heading'>Register</h2>
            <label for='inputEmail'>Email Address: </label> <br />
            <input type='email' placeholder='Enter your Email' className='form-control'name='email' onChange={evt => this.handleChange(evt)} required autofocus /> <br />
            <label for='inputpassword'>Password: </label><br />
            <input type='text' placeholder='Enter your password'className='form-control' name='password' onChange={evt => this.handleChange(evt)} required /><br />
            <label for='inputpassword'>Confirm Password: </label><br />
            <input type='text' placeholder='Enter your password'className='form-control' name='password' /><br />
            <button className='btn btn-lg btn-primary btn-block' type='submit'>Join us</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Register
