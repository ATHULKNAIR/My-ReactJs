//  npm install react-idle-timer

import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

function ReactIdleTimer() {
    const IdleTimerRef = useRef(null)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const timeOutRef = useRef(null)
    const onIdle = () => {
        console.log('User is Idle')
        setModalIsOpen(true)
        timeOutRef.current = setTimeout(logOut,5000 )
    }
    const stay = () => {
        setModalIsOpen(false);
        console.log('User is active')
        clearTimeout(timeOutRef.current)
    }
    const logOut=()=>{
        setModalIsOpen(false);
        setIsLoggedIn(false);
        clearTimeout(timeOutRef.current)
        console.log('User logged out')
    }
    return (
        <div>
            {
                isLoggedIn ? <h2>Hello Athul</h2> : <h2>Time Out ..!</h2>
            }
            <Modal isOpen={modalIsOpen}>
                <h2>You have been idle for a while</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button onClick={stay}>Stay Active</button>
                    <button onClick={logOut}>Log Out</button>
                </div>
            </Modal>
            <IdleTimer ref={IdleTimerRef} timeout={50 * 1000} onIdle={onIdle}></IdleTimer>
        </div>
    )
}

export default ReactIdleTimer

//  Use case --> Session timeout , can be used in bank websites and all
