import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Alert.css'


export default class Alert extends Component {

    static defaultProps = {
        type: 'info',
        bgColor: '#282c34',
        width: '350px',
        data: "The Alert title is the thing",
        color: '#a5a5a5',
        position: 'TR',
        title: 'Alerting title Commodo consectetur sit Lorem ullamco veniam nulla id sunt.',
        highlight: '#2798b7',
        // hoverStyle: '#fff'
    }

    state = {
        showDetail: false,
        display: true,
        hover: false
    }

    close = () => {
        this.setState({ display: false })
    }

    toggleSwitch = () => {
        this.setState({ showDetail: !this.state.showDetail });
    }

    renderView = () => {
        const {
            type,
            bgColor,
            width,
            data,
            color,
            position,
            title,
            hoverStyle
        } = this.props;

        return (
            <div
                className={'dev-animate-body'}
                style={{
                    backgroundColor: `${hoverStyle ? hoverStyle : bgColor}`,
                    width: `${width}`,
                    minWidth: '25%',
                    color: `${color}`,
                    top: `${(position === ('TR' || 'TL')) && '5px'}`,
                    right: `${(position === ('TR' || 'BR')) && '5px'}`,
                    bottom: `${(position === ('BR' || 'BL')) && '5px'}`,
                    left: `${(position === ('TL' || 'BL')) && '5px'}`,
                    boxShadow: 'black 0px 0px 14px 0px',
                }}
                onMouseOver={() => this.setState({ ...this.state, hover: true })}
                onMouseLeave={() => this.setState({ ...this.state, hover: false })}
            >

                <div>
                    <span
                        className={
                            (type === 'warning') ?
                                'fa fa-warning text-warning' :
                                (type === "danger") ?
                                    "fa fa-times-circle text-danger" :
                                    (type === "success") ?
                                        "fa fa-check text-success" :
                                        (type === "info") &&
                                        "fa fa-info-circle text-info"
                        }>
                    </span>
                    <p onClick={this.toggleSwitch}>{title ? title : data}</p>
                    <div>
                        <span onClick={this.toggleSwitch} className={'fa fa-caret-' + (this.state.showDetail ? 'up' : 'down')}></span>
                        <span onClick={this.close} className={'fa fa-times'}></span>
                    </div>
                </div>
                {
                    this.state.showDetail &&
                    data &&
                    <>
                        <hr />
                        <p>{data}</p>
                    </>
                }

            </div >
        )
    }

    render() {
        return (
            this.state.display &&
            <this.renderView />
        )
    }
}


Alert.propTypes = {
    type: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    title: PropTypes.string.isRequired, //Label for the alert Eg.('Network Error encountered! ')
    data: PropTypes.string.isRequired,
    width: PropTypes.string,
    color: PropTypes.string,
    position: PropTypes.string,
}