
// npm install react-icons --save

import React from 'react'
import './App.css';
import Modal from 'react-modal';
import ReactIcons from './components/ReactIcons';
import ReactNotifications from './components/ReactNotifications';
import ReactModal from './components/ReactModal';
import ReactTooltip from './components/ReactTooltip';
import ReactCountUp from './components/ReactCountUp';
import ReactIdleTimer from './components/ReactIdleTimer';
import ReactColorPicker from './components/ReactColorPicker';
import ReactCreditCards from './components/ReactCreditCards';
import ReactDatePicker from './components/ReactDatePicker';
import ReactVideoPlayer from './components/ReactVideoPlayer';
import ReactSpinners from './components/ReactSpinners';
import ReactChart from './components/ReactChart';


Modal.setAppElement('#root')
    //   Because of accessibility reasons, we need to define the app element on our modal import 
    //       --->  we need too add Modal.setAppElement('#root')

function App() {
  return (
      <div className="App">
        <ReactIcons />
        <ReactVideoPlayer/>
        <ReactDatePicker/>
        <ReactCreditCards/>
        <ReactNotifications/>
        <ReactSpinners/>
        <ReactModal/>
        <ReactTooltip/>
        <ReactCountUp/>
        <ReactIdleTimer/>
        <ReactColorPicker/>
        <ReactChart/>
      </div>

);
}

export default App;
