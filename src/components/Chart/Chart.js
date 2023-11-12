import React from 'react';
import "./Chart.css";
import ChartBar from"./ChartBar.js";

const Chart = (props) => {
const dataPointValues = props.dataPoints.map(el=>el.value);
const totalMax = Math.max(...dataPointValues)    

  return (
    <div className='chart'>
    {
        props.dataPoints.map(el=>{
        return (
            <ChartBar 
                key={el.label}
                value={el.value}
                label={el.label}
                maxValue={totalMax}
            />
        )
       })
        
    }
    </div>
  )
}

export default Chart;