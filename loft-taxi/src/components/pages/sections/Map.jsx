import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';

export class Map extends Component {
    static propTypes = {
        defaultProperties: PropTypes.shape({
            changeSection: PropTypes.func.isRequired
        }).isRequired
    }

    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibmlreXM5IiwiYSI6ImNrYzlmanhwZzFrb3kycnRpM3d5eTkzbTUifQ.EU29cAFsaxFF5TFg7hoc7w'

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.3056504, 59.9429126],
            zoom: 10,
        })
    }
    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return <div className="map-wrapper">
            <div data-testid="map"  className="map" ref={this.mapContainer} />
        </div>
    }
}

export default Map;