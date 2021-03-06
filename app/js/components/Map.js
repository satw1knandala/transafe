/* eslint-disable semi */
import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import HeatmapOverlay from 'react-map-gl-heatmap-overlay';

const accessToken = 'pk.eyJ1Ijoic25hbmRhbGEiLCJhIjoiY2l1'
+'MHhzc3JvMDVndjJ0cXRueDV5b2R6ayJ9.xV6ZgqsjoyESWEZZtVLkFQ';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        longitude: -83.046,
        latitude: 42.331,
        zoom: 11,
        startDragLngLat: null,
        isDragging: false,
      },
      crimeCoords: [],
    };
  }

  componentDidMount() {
    // api.getAllCrime()
    //   .then(crimes => {
    //     const crimeCoords = crimes.map(crime => {
    //       return {longitude: crime.lon, latitude: crime.lat};
    //     });
    //     this.setState({crimeCoords});
    //   }).catch(err => {
    //     console.log('error in componentDidMount:' + err);
    // });
  }

  render() {
      return (
        <MapGL
          width={1300}
          height={950}
          {...this.state.viewport}
          mapboxApiAccessToken={accessToken}
          onChangeViewport={(viewport) => {
            const {longitude, latitude, zoom, startDragLngLat, isDragging} = viewport;
            this.setState({viewport: {longitude, latitude, zoom, startDragLngLat, isDragging}})
          }}>

          <HeatmapOverlay
            height={950}
            width={1300}
            {...this.state.viewport}
            locations={this.state.crimeCoords} />
        </MapGL>
      )
    }
  }
