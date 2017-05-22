import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Login extends React.Component {
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
      <Router>
        <div className='loginform' >
          <div className='container'>
            <form onSubmit={(evt) => this.handleSubmit(evt)} className='form-signin'>
              <h2 className='form-signin-heading'>Please sign in</h2>
              <label for='inputEmail'>Email Address: </label> <br />
              <input type='email' placeholder='Enter your Email' className='form-control'name='email' onChange={evt => this.handleChange(evt)} required autoFocus /> <br />
              <label for='inputpassword'>Password: </label><br />
              <input type='text' placeholder='Enter your password'className='form-control' name='password' onChange={evt => this.handleChange(evt)} required /><br />
              <Link to='/register'>Register Here</Link>
              <Link to='/food'> <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button></Link>
            </form>
          </div>
        </div>
      </Router>
    )
  }
}
export default Login
