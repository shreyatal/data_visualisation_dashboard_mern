import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const ScatterPlot = () => {
    const [data, setData] = useState([]);
    const [xAxisOption, setXAxisOption] = useState('country');

    useEffect(() => {
        axios.get('http://localhost:5000/getData')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleXAxisChange = (e) => {
        setXAxisOption(e.target.value);
    };

    return (
        <div>
            <div style={{ margin: '20px' }}>
                <label htmlFor="xAxisSelect">Select X-Axis:</label>
                <select id="xAxisSelect" value={xAxisOption} onChange={handleXAxisChange}>
                    <option value="country">Country</option>
                    <option value="region">Region</option>
                </select>
            </div>
            <Plot
                data={[{
                    x: data.map(d => d[xAxisOption]),
                    y: data.map(d => d.topic),
                    mode: 'markers',
                    type: 'scatter'
                }]}
                layout={{
                    width: 1500,
                    height: 600,
                    title: 'Topic vs X-Axis',
                    titlepad:50,
                    xaxis: { title: xAxisOption.charAt(0).toUpperCase() + xAxisOption.slice(1),tickangle:45,automargin:true, titlepad: 50, tickfont: { size: 14 }},
                    yaxis: { title: 'Topic',automargin:true, titlepad: 50, tickfont: { size: 14 } }
                }}
            />
        </div>
    );
};

export default ScatterPlot;
