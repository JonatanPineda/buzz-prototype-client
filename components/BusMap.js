import React, { Component } from 'react'
import { MapView } from 'expo'
import { StyleSheet } from 'react-native'
import { getList } from '../selectors/entities'
import { connect } from 'react-redux'
import { getDenormalizedDetail } from '../selectors/entities'
import { denormalize } from 'normalizr'
import { doStartBusesPolling } from '../actions/buses'

class BusMap extends Component {
  componentDidMount() {
    this.props.onStartBusesPolling()
  }
  render() {
    const { route } = this.props
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.703170488904302,
          longitude: -106.10487345042608,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {route.buses.map(bus => 
          <MapView.Marker
            key={bus._id}
            coordinate={{ 
              latitude: bus.lat,
              longitude: bus.lon
            }}
          />
        )}
      </MapView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  map: {
    flex: 1,
    zIndex: -1,
  }
})

const mapStateToProps = state => ({
    route: getDenormalizedDetail(state.entities, 'route', '5ba7e898ab9162db93692444')
})

const mapDispatchToProps = dispatch => ({
  onStartBusesPolling: () => dispatch(doStartBusesPolling())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusMap)
