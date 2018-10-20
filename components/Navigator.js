import React, { Component } from 'react'
import { compose } from 'recompose'
import withMachine from './withMachine'
import { matchesState } from 'xstate'
import Splash from './Splash'
import BusMap from './BusMap'

class Navigator extends Component {
  render() {
    const { machine } = this.props
    if(matchesState('splashScreen', machine))
      return (<Splash />)
    if(matchesState('busMap', machine))
      return (<BusMap />)
    return null
  }
}

export default  compose(
  withMachine
)(Navigator)
