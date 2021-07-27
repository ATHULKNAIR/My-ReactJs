// npm install react-player

import React from 'react'
import ReactPlayer from 'react-player'

function ReactVideoPlayer() {
    return (
        <div style={{marginLeft:'500px'}}>
            <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'
                         controls  width='480px' height='240px'
                         onReady={()=>console.log('Video Ready')}
                         onPlay={()=>console.log('Video Play')}
                         onPause={()=>console.log('Video Pause')}
                         onEnded={()=>console.log('Video Ended')}
                         onError={()=>console.log('Video Error')}
                         onBuffer={()=>console.log('Video Buffer')}
            />
        </div>
    )
}

export default ReactVideoPlayer

// controls --> gives us the acces to controls in video
// by default the width --> 640px and height --> 360px
