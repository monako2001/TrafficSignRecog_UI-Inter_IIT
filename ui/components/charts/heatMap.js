import React from 'react';
import ReactApexChart from 'react-chartjs-2';

export default class HeatMap extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          
            series: [{
                name: 'True',
                data: [1,2,3,4,5]
            },
            {
                name: 'Predicted',
                data: [1,2,3,4,5]
            }
            ],
            options: {
                chart: {
                height: 350,
                type: 'heatmap',
                },
                dataLabels: {
                enabled: false
                },
                colors: ["#008FFB"],
                title: {
                text: 'Confusion Matrix'
                },
            },
            
            
            };
    }

    render(){

        return(

            <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />

        )

    }

} 