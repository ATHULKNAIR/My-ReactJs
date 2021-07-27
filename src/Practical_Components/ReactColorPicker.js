// npm install react-color

import React, { useState } from 'react'
import { ChromePicker } from 'react-color'


function ReactColorPicker() {

    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)

    return (
        <div>
            <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker ? 'Close Color Picker' : 'Pick a color'}
            </button>
            {
                showColorPicker && <ChromePicker color={color} onChange={(colour) => setColor(colour.hex)} />
            }
            <h2>Color : {color} </h2>
        </div>
    )
}

export default ReactColorPicker


// basically the styling of the color picker resembles the chrome dev tools color picker