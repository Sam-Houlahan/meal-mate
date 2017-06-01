import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''

    }
  }

  handleSubmit (evt) {
    evt.preventDefault()
  }

  handleChange (evt) {
    let user = {...this.state.email}
    let password = {...this.state.password}
    user[evt.target.name] = evt.target.value
    password[evt.target.name] = evt.target.value
    this.setState({email: user, password: password})
  }
  render () {
    console.log(this.state.email)
    return (
      <Router>
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
              <Link to='/login'><button className='btn btn-lg btn-primary btn-block' type='submit'>Join us</button></Link>
            </form>
          </div>
        </div>
      </Router>
    )
  }
}
export default Register
