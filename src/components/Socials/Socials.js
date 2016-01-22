import React, { PropTypes } from 'react'
import classNames from 'classnames';
import CSSModules from 'react-css-modules'
import styles from './Socials.scss'

@CSSModules(styles)
export class Socials extends React.Component {

  render () {
    return (
      <div styleName='Socials'>
        <div styleName="social">share via email</div>
        <div styleName="social">share on facebook</div>
        <div styleName="social">share on twitter</div>
      </div>
    )
  }

}

export default Socials
