import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const BubbleChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getData')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const xArray = data.map(d => d.topic);
    const yArray = data.map(d => d.likelihood);

    const trace1 = {
        x: xArray,
        y: yArray,
        mode: 'markers',
        marker: {
            color: ['red', 'green', 'blue', 'orange'], 
            size: [40, 60, 80, 100] 
        }
    };

    const plotData = [trace1];

    return (
        <div >
            <Plot
                data={plotData}
                layout={{
                    height:500,
                    width:1500,
                    title: 'Likelihood vs. Topic',
                    xaxis: { title: 'Topic', tickangle: 50, titlepad: 20, tickfont: { size: 14 } },
                    yaxis: { title: 'Likelihood', titlepad: 20, tickfont: { size: 14 } }
                }}
            />
        </div>
    );
};

export default BubbleChart;
