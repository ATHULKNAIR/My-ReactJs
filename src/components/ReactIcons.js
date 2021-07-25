import React from 'react'
import { IconContext } from 'react-icons/lib';
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';

function ReactIcons() {
    return (

        <IconContext.Provider value={{ color: 'blue', size: '10rem' }}>
            <div >
                <FaReact  /* color='red' size= '5rem' */ />
                <MdAlarm  /* color='red' size= '5rem' */ />
            </div>
        </IconContext.Provider>

        // If we write props value in icons, it will have more prefernce than the value provided in context Provider
        // Context Provider helps us to reduce the code .
    )
}

export default ReactIcons
