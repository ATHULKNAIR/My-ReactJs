// npm install react-spinners   

import React from 'react'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'

function ReactSpinners() {
    return (
        <div>
            <BeatLoader size={24} color='red' loading/>
            <BarLoader size={48} color='blue' loading/>
            <BounceLoader size={72} color='yellow' loading/>
            
        </div>
    )
}

export default ReactSpinners
