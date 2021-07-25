//npm install react-toastify

import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
function ReactNotifications() {

    const toastId = React.useRef(null);

    const CustomToast = ({ closeToast }) => {
        return (
            <div>
                Hi Athul
                <button onClick={closeToast}>Close</button>
            </div>
        )
    }

    function notify() {
        toast('Default Notification !', { position: toast.POSITION.TOP_LEFT, toastId: 'customId' })
        toast.success('Success Notification !', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        toast.info('Info Notification !', { position: toast.POSITION.TOP_RIGHT, autoClose: 4000 })
        toast.warning('Warning Notification !', { position: toast.POSITION.BOTTOM_LEFT, autoClose: false })
        toast.error('Error Notification !', { position: toast.POSITION.BOTTOM_CENTER, autoClose: 7000 })
        toast(<CustomToast />, { position: toast.POSITION.BOTTOM_RIGHT })
    }

    function display() {
        toastId.current = toast('Hello Athul', { autoClose: false });
    }
    function update() {
        toast.update(toastId.current, { render: 'How are you', type: toast.TYPE.INFO, autoClose: 5000 })
    }
    return (
        <div>
            <button onClick={notify}>Notify..!</button>
            <button onClick={display}>Display</button>
            <button onClick={update}>Update</button>
        </div>
    )
}

//  By default the position of notification will be on top right of the screen 
//      --> this can be configured using the position property on configuration object , which is the second paramenter to toast function

// We have 4 inbuilt types of notifications -->  success , info , warning , error

// By default, all the notification will disappear after 5 seconds  --> we can configure that using autoClose attribute
//      --> if autoClose set to flase, then it will not close automatically

// we can create a custom toast component and pass it to notifications.


export default ReactNotifications
