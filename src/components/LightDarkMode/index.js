/* eslint-disable no-unused-vars */
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {onLight: true}

  onClickLight = () => {
    this.setState(preState => ({onLight: !preState.onLight}))
  }

  render() {
    const {onLight} = this.state
    const lightName = onLight ? 'Light Mode' : 'Dark Mode'
    const themeName = onLight ? 'Dark-Mode' : 'Light-Mode'
    const headingName = onLight ? 'heading-Dark' : 'heading-Light'
    return (
      <div className="light-container">
        <div className={`card-light-container ${themeName}`}>
          <h1 className={`heading ${headingName}`}>Click To Change Mode</h1>
          <button
            className="button-Mode"
            type="button"
            onClick={this.onClickLight}
          >
            {lightName}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
