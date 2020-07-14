export default function(historical) {
    return {
        title: {
            text: 'Value vs Time'
        },
    
        subtitle: {
            text: 'Source: cryptocompare.com'
        },
    
        yAxis: {
            title: {
                text: 'Price'
            }
        },
    
        xAxis: {
            type: 'datetime',
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: historical,
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    }
}