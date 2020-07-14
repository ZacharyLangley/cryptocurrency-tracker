import React from 'react';
import ReactHighCharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';

export default function() {
    return (
        <AppContext.Consumer>
            {
                ({}) => (
                    <Tile>
                        <ReactHighCharts config={highchartsConfig()}/>
                    </Tile>
                )
            }
        </AppContext.Consumer>
    )
}