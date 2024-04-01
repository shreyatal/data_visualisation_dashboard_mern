import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const BarGraph2 = () => {
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

    return (
        <div >
            <Plot
                data={[{
                    type: 'bar',
                    x: data.map(d => d.sector),
                    y: data.map(d => d.intensity),
                    marker: {
                        color: 'rgb(158,202,225)',
                        opacity: 0.6,
                        line: {
                            color: 'rgb(8,48,107)',
                            width: 1.5
                        }
                    }
                }]}
                layout={{
                    width: 1400,
                    height: 500,
                    title: 'Intensity by Sector',
                    xaxis: { title: 'Sector',automargin:true , titlepad: 20, tickfont: { size: 14 }},
                    yaxis: { title: 'Intensity',automargin:true , titlepad: 20, tickfont: { size: 14 }}
                }}
            />
        </div>
    );
};

export default BarGraph2;
