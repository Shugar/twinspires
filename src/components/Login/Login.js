import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Login.scss'

@CSSModules(styles)
export class Login extends React.Component {

  static propTypes = {
    success: PropTypes.string,
    login: PropTypes.string,
    password: PropTypes.string
  };

  static defaultProps = {
    success: 'Click for check'
  };

  state = {
    success: this.props.success,
    login: this.props.login,
    password: this.props.password
  };

  render () {
    return (
      <div>
        <div styleName='login-container'>
          <input onChange={this._onChangeLogin} styleName='input' type='text' placeholder='Username' />
          <input onChange={this._onChangePassword} styleName='input' type='password' placeholder='Password' />
          <div onClick={this._onSubmitClick} styleName='button'>Log In to Get Started</div>
          <a styleName='link' href='#'>Forgot username/password?</a>
        </div>
        <div styleName='bottom-text'>
          New to TwinSpires? <a href='#' styleName='bottom-link'>Create a FREE account now.</a>
        </div>
      </div>
    )
  }

  _onChangeLogin = (event) => {
    var loginValue = event.target.value
    this.setState({login: loginValue})
  };

  _onChangePassword = (event) => {
    var passwordValue = event.target.value
    this.setState({password: passwordValue})
  };

  _onSubmitClick = (event) => {
    if (this.state.login === '123' && this.state.password === '123') {
      this.setState({
        success: 'Success :)'
      })
    } else {
      this.setState({
        success: 'Нахуй с двора!'
      })
    }
  };

}

export default Login
