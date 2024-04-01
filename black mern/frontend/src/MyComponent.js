import React from 'react';
import BarG from './BarGraph2';
import ScatterPlot from './ScatterPlot';
import BubbleChart from './BubbleChart';
import BarGraph from './BarGraph1';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const MyComponent = () => {
    return (
        <div>
            <div>
                <BarGraph />
            </div>
            <div >
                <BubbleChart />
            </div>
            <div>
                <ScatterPlot />
            </div>
            <div>
                <BarG />
            </div>
        </div>
    );
};

export default MyComponent;
