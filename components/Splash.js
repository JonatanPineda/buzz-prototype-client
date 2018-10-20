import React, { Component } from 'react'
import { 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import withMachine from './withMachine'
import { matchesState } from 'xstate'
import { doFetchRoutes } from '../actions/routes'

class Splash extends Component {
  componentDidMount() {
    this.props.onFetchRoutes()
  }

  render() {
    const { machine } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <Image
            source={require('../assets/icon.png')}
            resizeMode='contain'
          />
          {matchesState('splashScreen.fetchingRoutes', machine) ? 
              <Text style={styles.welcome}>Cargando...</Text> :
              null
          }
       </View>
      </View>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  onFetchRoutes: () => dispatch(doFetchRoutes())
})

export default compose(
  withMachine,
  connect(
    null,
    mapDispatchToProps
  )
)(Splash)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  homeContainer: {
    alignItems: 'center'
  },
  welcome: {
    color: 'rgba(0, 0, 0, .85)',
    marginTop: 26,
    marginBottom: 26,
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    marginTop: 26,
    fontSize: 22,
    textAlign: 'center'
  },
  registration: {
    color: 'rgba(0, 0, 0, .5)',
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
})

