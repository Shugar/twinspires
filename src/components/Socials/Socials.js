import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Socials.scss'

@CSSModules(styles)
export class Socials extends React.Component {

  render () {
    return (
      <div styleName='Socials'>
        <div styleName='social-email'>share via email</div>
        <div styleName='social-facebook'>share on facebook</div>
        <div styleName='social-twitter'>share on twitter</div>
      </div>
    )
  }

}

export default Socials
