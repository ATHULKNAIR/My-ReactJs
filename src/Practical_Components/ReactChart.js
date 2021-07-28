// npm install react-chartjs-2 chart.js

import React from 'react'
import {Line,Bar,Doughnut} from 'react-chartjs-2'

function ReactChart() {
    const data ={
        labels:['Jan','Feb','Mar','Apr','May'],
        datasets:[{
            label:'Sales for 2021 (M)',
            data:[3,2,2,1,5],
           
        },{
            label:'Sales for 2020 (M)',
            data:[1,3,2,2,3]
        }]
    }
    
    return  (
        <div style={{height:'200px',width:'500px', marginLeft:'500px'}}>
            <Line data = {data}  />
            <Bar data = {data} />
            <Doughnut data = {data} />
        </div>
    )

}

export default ReactChart
