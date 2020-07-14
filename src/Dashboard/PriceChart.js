import React from 'react';
import ReactHighCharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import HighchartsTheme from './HighChartsTheme';
import ChartSelect from './ChartSelect';

ReactHighCharts.Highcharts.setOptions(HighchartsTheme)


export default function() {
    return (
        <AppContext.Consumer>
            {
                ({historical, changeChartSelect}) => (
                    <Tile>
                        <ChartSelect 
                            defaultValue={'months'}
                            onChange={e=> changeChartSelect(e.target.value)}>
                            <option value={'days'}>Days</option>
                            <option value={'weeks'}>Weeks</option>
                            <option value={'months'}>Months</option>
                            <option value={'years'}>Years</option>
                        </ChartSelect>
                        {
                            historical ? 
                            <ReactHighCharts config={highchartsConfig(historical)}/> :
                            <div>Loading...</div>
                        }
                    </Tile>
                )
            }
        </AppContext.Consumer>
    )
}