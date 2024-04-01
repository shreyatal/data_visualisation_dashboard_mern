import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const BarGraph1 = () => {
    const [data, setData] = useState([]);
    const [xAxisOption, setXAxisOption] = useState('end_year');
    const [yAxisOption, setYAxisOption] = useState('relevance');

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

    const handleYAxisChange = (e) => {
        setYAxisOption(e.target.value);
    };

    return (
        <div>
            <div style={{ margin: '20px' }}>
                <label htmlFor="xAxisSelect">Select X-Axis:</label>
                <select id="xAxisSelect" value={xAxisOption} onChange={handleXAxisChange}>
                    <option value="end_year">End Year</option>
                    <option value="start_year">Start Year</option>
                </select>
            </div>
            <div style={{ margin: '20px' }}>
                <label htmlFor="yAxisSelect">Select Y-Axis:   </label>
                <select id="yAxisSelect" value={yAxisOption} onChange={handleYAxisChange}>
                    <option value="relevance">Relevance</option>
                    <option value="likelihood">Likelihood</option>
                </select>
            </div>
            <Plot
                data={[{
                    x: data.map(d => d[xAxisOption]),
                    y: data.map(d => d[yAxisOption]),
                    type: 'bar'
                }]}
                layout={{
                    width: 1400,
                    height: 600,
                    xaxis: { title: xAxisOption.charAt(0).toUpperCase() + xAxisOption.slice(1), titlepad: 20, tickfont: { size: 14 } },
                    yaxis: { title: yAxisOption.charAt(0).toUpperCase() + yAxisOption.slice(1), titlepad: 20, tickfont: { size: 14 } },
                    title: `${yAxisOption.charAt(0).toUpperCase() + yAxisOption.slice(1)} vs ${xAxisOption.charAt(0).toUpperCase() + xAxisOption.slice(1)} `
                }}
            />
        </div>
    );
};

export default BarGraph1;

