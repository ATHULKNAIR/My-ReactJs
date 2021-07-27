
// npm install react-icons --save

import React from 'react'
import './App.css';
import Modal from 'react-modal';
import ReactIcons from './Practical_Components/ReactIcons';
import ReactNotifications from './Practical_Components/ReactNotifications';
import ReactModal from './Practical_Components/ReactModal';
import ReactTooltip from './Practical_Components/ReactTooltip';
import ReactCountUp from './Practical_Components/ReactCountUp';
import ReactIdleTimer from './Practical_Components/ReactIdleTimer';
import ReactColorPicker from './Practical_Components/ReactColorPicker';
import ReactCreditCards from './Practical_Components/ReactCreditCards';
import ReactDatePicker from './Practical_Components/ReactDatePicker';
import ReactVideoPlayer from './Practical_Components/ReactVideoPlayer';
import ReactSpinners from './Practical_Components/ReactSpinners';
import ReactChart from './Practical_Components/ReactChart';


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
