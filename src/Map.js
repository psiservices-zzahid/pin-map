import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default class Map extends React.Component {
  state = {
    viewport: {
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      width: 1500,
      height: 600,
      latitude: 53.978332,
      longitude: -1.290278,
      zoom: 10,
    },
    pins: [
      {
        latitude: 53.958332,
        longitude: -1.180278,
        captureClick: false,
        draggable: false,
        offsetTop: -30,
        offsetLeft: -15,
      },
      {
        latitude: 53.968332,
        longitude: -1.240278,
        captureClick: false,
        draggable: false,
        offsetTop: -30,
        offsetLeft: -15,
      },
      {
        latitude: 53.978332,
        longitude: -1.290278,
        captureClick: false,
        draggable: false,
        offsetTop: -30,
        offsetLeft: -15,
      },
      {
        latitude: 53.988332,
        longitude: -1.430278,
        captureClick: false,
        draggable: false,
        offsetTop: -30,
        offsetLeft: -15,
      },
      {
        latitude: 53.998332,
        longitude: -1.470278,
        captureClick: false,
        draggable: false,
        offsetTop: -30,
        offsetLeft: -15,
      },
    ],
  };

  render() {
    return (
      <>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken='pk.eyJ1IjoibXphZWVteiIsImEiOiJja2dtNG55cnAxb2cxMnN0ZW5vNDV3Znc0In0.1bUyV9QvQ8AAL9aDHnZFSw'
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          {this.state.pins.map((pin) => (
            <Marker {...pin}>
              <div className='custom-pin'>
                <img src={require('./pin-red.png')} alt='Here' />
              </div>
            </Marker>
          ))}
        </ReactMapGL>
      </>
    );
  }
}
