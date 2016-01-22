import React, { PropTypes } from 'react'
import classNames from 'classnames';
import CSSModules from 'react-css-modules'
import styles from './Promo.scss'

@CSSModules(styles)
export class Promo extends React.Component {

  static propTypes = {
    promoActive: PropTypes.bool
  };

  static defaultProps = {
    promoActive: false
  };

  state = {
    promoActive: this.props.promoActive
  };

  render () {
    return (
      <div styleName='promo'>
        <div styleName='text'>
          Send Your PROMO CODE
        </div>
        <div styleName='code'>
          CAMID
        </div>

        <div onClick={this._onClick} styleName='link'>
          Get Your Invitation Link
        </div>
      </div>
    )
  }

  _onClick = (event) => {
    this.setState({promoActive: !this.state.promoActive})
  };

}

export default Promo
