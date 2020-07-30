import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getRoute, getAddressList } from '../../../actions';

export class Map extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: true,
            address1_value: '',
            address2_value: '',
            address1_drop: false,
            address2_drop: false,
            call_taxi: false,
        }
    }

    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        console.log(this.props.billing)
        this.props.getAddressList();
        mapboxgl.accessToken = 'pk.eyJ1IjoibmlreXM5IiwiYSI6ImNrYzlmanhwZzFrb3kycnRpM3d5eTkzbTUifQ.EU29cAFsaxFF5TFg7hoc7w'

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.3056504, 59.9429126],
            zoom: 10,
        })
    }

    static propTypes = {
        addresses: PropTypes.array.isRequired,
        coordinates: PropTypes.array.isRequired,
        billing: PropTypes.shape({
            cardNumber: PropTypes.string.isRequired,
            expiryDate: PropTypes.string.isRequired,
            cardName: PropTypes.string.isRequired,            
        }).isRequired,
        getRoute: PropTypes.func.isRequired,
        getAddressList: PropTypes.func.isRequired
    }

    componentWillUnmount() {
        this.map.remove()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.coordinates !== this.props.coordinates) {
            this.handleRoute(this.props.coordinates)
        }
    }

    handleRoute(coordinates) {
        this.clearRoute();

        this.map.flyTo({
            center: coordinates[0],
            zoom: 15
        });

        this.map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#ffc617",
                "line-width": 8
            }
        });
    }

    clearRoute() {
        this.map.flyTo({
            zoom: 10
        });

        if (this.map.getLayer("route")) {
            this.map.removeLayer("route");
        }

        if (this.map.getSource("route")) {
            this.map.removeSource("route");
        }
    }

    handleAddressDropdown(index) {
        switch (index) {
            case 0:
                if (this.state.address1_drop === false) {
                    this.setState({ address1_drop: true, address2_drop: false })
                } else {
                    this.setState({ address1_drop: false })
                }
                break;
            case 1:
                if (this.state.address2_drop === false) {
                    this.setState({ address2_drop: true, address1_drop: false })
                } else {
                    this.setState({ address2_drop: false })
                }
                break;
            default:
                return;
        }
    }

    handleAddressValue(address, index) {
        switch (index) {
            case 0:
                this.setState({ address1_value: address })
                break;
            case 1:
                this.setState({ address2_value: address })
                break;
            default:
                return;
        }
    }

    handleValueChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    clearInput(index) {
        switch (index) {
            case 0:
                this.setState({ address1_value: '' })
                break;
            case 1:
                this.setState({ address2_value: '' })
                break;
            default:
                return;
        }
    }

    getRoute = () => {
        this.props.getRoute(this.state.address1_value, this.state.address2_value)
    }

    filterInputs(index) {
        switch (index) {
            case 0:
                return this.props.addresses.filter((e) => {
                    return e !== this.state.address2_value && e.toLowerCase().indexOf(this.state.address1_value.toLowerCase()) > -1;
                })
            case 1:
                return this.props.addresses.filter((e) => {
                    return e !== this.state.address1_value && e.toLowerCase().indexOf(this.state.address2_value.toLowerCase()) > -1;
                })
            default:
                return;
        }
    }

    clickCallTaxi(value){   
        this.clearRoute()
        this.clearInput(0)
        this.clearInput(1)
        this.setState({call_taxi: value})
    }

    render() {
        return <div className="map-wrapper">
            <div data-testid="map" className="map" ref={this.mapContainer}>
                <div className="taxi_box">
                    <div className="taxi_pad">
                        {this.props.billing.cardNumber !== '' && this.props.billing.cardName !== '' && this.props.billing.expiryDate !== '' ? (

                            this.state.call_taxi ? 

                            (
                                <div className="start_taxi">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <h1 className="MuiTypography-root jss405 MuiTypography-h4 MuiTypography-alignLeft">Заказ размещён</h1>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <p className="MuiTypography-root jss406 MuiTypography-body1">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                            <div className="box_btn_taxxxi slk_ll btn_taxi_yellow" onClick={() => this.clickCallTaxi(false)}>
                                                <div>Сделать новый заказ</div>
                                            </div>
                                    </div>
                                </div>
                            )

                                : (
                                    <div className="start_taxi">
                                        <div className="start_taxi">
                                            <div className="search_adress" onClick={() => this.handleAddressDropdown(0)}>
                                                <input type="text" name="address1_value" className="search_adress_input" placeholder="Откуда" value={this.state.address1_value}
                                                    onChange={(e) => this.handleValueChange(e)}
                                                />

                                                {this.state.address1_value === "" ? null :
                                                    <div className="del_value" onClick={() => this.clearInput(0)}></div>
                                                }

                                                <div className="box_for_button">
                                                    <div className="bottom_arrow"></div>
                                                </div>
                                                {this.state.address1_drop ? (
                                                    <div className="drop_down_spisok">
                                                        <ul>
                                                            {this.filterInputs(0).map((address, index) =>
                                                                <li key={index} onClick={() => this.handleAddressValue(address, 0)}>{address}</li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div className="otsp_40px"></div>
                                            <div className="search_adress" onClick={() => this.handleAddressDropdown(1)}>
                                                <input type="text" name="address2_value" className="search_adress_input" placeholder="Куда" value={this.state.address2_value}
                                                    onChange={(e) => this.handleValueChange(e)}
                                                />
                                                {this.state.address2_value === "" ? null :
                                                    <div className="del_value" onClick={() => this.clearInput(1)}></div>
                                                }

                                                <div className="box_for_button">
                                                    <div className="bottom_arrow"></div>
                                                </div>
                                                {this.state.address2_drop ? (
                                                    <div className="drop_down_spisok style_spisok_2">
                                                        <ul>
                                                            {this.filterInputs(1).map((address, index) =>
                                                                <li key={index} onClick={() => this.handleAddressValue(address, 1)}>{address}</li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                ) : null}

                                            </div>

                                            {
                                                this.state.address1_value === "" || this.state.address2_value === "" ?
                                                    <div className="btn_taxi_grey box_btn_taxxxi">
                                                        <div>Выберите адреса</div>
                                                    </div>
                                                    :
                                                    <div className="box_btn_taxxxi btn_taxi_yellow" onClick={() => { this.getRoute(); this.clickCallTaxi(true) }}>
                                                        <div>Вызвать такси</div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                )
                        )
                            : (
                                <div className="start_taxi">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <h1 className="MuiTypography-root jss405 MuiTypography-h4 MuiTypography-alignLeft">Заполните платежные данные</h1>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <p className="MuiTypography-root jss406 MuiTypography-body1">Укажите информацию о банковской карте, чтобы сделать заказ.</p>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <Link to="/account/profile">
                                            <div className="box_btn_taxxxi slk_ll btn_taxi_yellow">
                                                <div>Перейти в профиль</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

        </div>
    }
}

const mapStateToProps = state => ({
    addresses: state.map.addresses,
    coordinates: state.map.coordinates,
    billing: state.profile
})

const MapWithRedux = connect(
    mapStateToProps,
    { getRoute, getAddressList }
)(Map);

export default MapWithRedux;