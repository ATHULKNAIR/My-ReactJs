//  npm install react-modal

import React, { useState } from 'react'
import Modal from 'react-modal'


function ReactModal() {

    const [modalIsOpen, setModelIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModelIsOpen(true)}>Click Me</button>
            <Modal isOpen={modalIsOpen}
                /*  shouldCloseOnOverlayClick={false} onRequestClose={()=>setModelIsOpen(false)}*/
                style={{
                    overlay: {
                        backgroundColor: 'green'
                    },
                    content: {
                        color: 'black',
                        fontSize:'3rem',
                        backgroundColor: 'lightgreen'
                    }
                }}>

                <div>Hello World</div>
                <p>This is a modal</p>
                <button onClick={()=>setModelIsOpen(false)}> Close</button>
            </Modal>
        </div>
    )
}

export default ReactModal

 //   isOpen prop is set to true to display the model
    //   inorder to display modal on button click, we need to set a state to isOpen attribute which will be a boolean
    //   onRequestClose attribute gives us the ability to close the modal when we touch overlay or when esc is clicked
    //   shouldCloseOnOverlayClick={false} makes the modal not close when clicked on overlay (outside the modal)

    //   Because of accessibility reasons, we need to define the app element on our modal import --> shows warning in console
    //       --->  we need too add Modal.setAppElement('#root')

