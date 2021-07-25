// npm install react-countup

import React from 'react'
import CountUp, { useCountUp } from 'react-countup'

function ReactCountUp() {

    const { countUp, start, pauseResume, reset, update } = useCountUp({ duration: '5', end: 100000, startOnMount: false })
    //  startOnMount is set to false, so that the counter do not start on page load

    return (
        <div>
            <div>
                <h1>{countUp}</h1>
                <button onClick={start}>Start</button>
                <button onClick={pauseResume}>Pause / Resume</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => update(5000)}>Update to 5000</button>
            </div>
            <CountUp end={200} />
            <br />
            <CountUp end={200} duration={5} />
            <br />
            <CountUp start={200} end={500} duration={10} />
            <br />
            <CountUp end={1000} duration={5} prefix='$ ' decimals={2} />
            <br />
            <CountUp end={1000} duration={5} suffix='INR ' decimals={2} />

        </div>
    )
}

export default ReactCountUp

//  end prop --> indicates the value at which animation has to stop   ----> by default the duration is 2 sec
//  duration prop -->  indicates the duration of component
//  start prop --> indicates the starting of component , by default it is 0
//  prefix prop --> we can add something infront of the component
//  suffix prop --> we can add something after the component
//  decimals --> indicates the number of decimal spaces

// we can manually start , pause , stop and reset the countup component using the useCountUp hook
