//  npm install '@tippy.js/react'


import React from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'


const ToolTip = () => {
    return <div style={{ color: 'blue' }}>
        Hello World
    </div>
}

function ReactTooltip() {
    return (
        <div>
            <div style={{ paddingBottom: '30px' }}>
                <Tippy content='Tool-tip' arrow={false}>
                    <button>Click me</button>
                </Tippy>
            </div>
            <div style={{ paddingBottom: '30px' }}>
                <Tippy content={<div style={{ color: 'red' }}> Welcome to World</div>} placement='right'>
                    <button>Click me</button>
                </Tippy>
            </div>
            <div style={{ paddingBottom: '30px' }}>
                <Tippy content={<ToolTip />} delay={1000} placement='top-start'>
                    <button>Click me</button>
                </Tippy>
            </div>
        </div>
    )
}

export default ReactTooltip

// Content attribute also accepts HTML elements
// arrow prop displays the arrow in tooltip, true by default
// delay attribute adds the delay in displaying and hiding tooltip
// placement prop defines where the tooltip is to be displayed. by deafult it is to top, to bottom if no space at top
