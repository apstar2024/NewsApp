import React, { Component } from 'react'
import Loading_icon from "./Loading_icon.gif"

export default class Loading extends Component {
  render() {
    return (
      <div style={{
                    position:'absolute',
                    top:'30%',
                    left:'35%'
      }}>
        <img src={Loading_icon} alt="loading"/>
      </div>
    )
  }
}
