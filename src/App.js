
// npm install react-icons --save

import React from 'react'
import './App.css';
import Modal from 'react-modal';
import ReactIcons from './components/ReactIcons';
import ReactNotifications from './components/ReactNotifications';
import ReactModal from './components/ReactModal';
import ReactTooltip from './components/ReactTooltip';
import ReactCountUp from './components/ReactCountUp';

Modal.setAppElement('#root')
    //   Because of accessibility reasons, we need to define the app element on our modal import 
    //       --->  we need too add Modal.setAppElement('#root')

function App() {
  return (

    
      <div className="App">
        <ReactIcons />
        <ReactNotifications/>
        <ReactModal/>
        <ReactTooltip/>
        <ReactCountUp/>
      </div>
   


    

  );
}

export default App;
