import React from 'react';
import ReactHighCharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import HighchartsTheme from './HighChartsTheme';

ReactHighCharts.Highcharts.setOptions(HighchartsTheme)

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