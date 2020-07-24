import React, { Component } from "react";
import Transition from 'react-transition-group/Transition'
import * as TransitionStatus from 'react-transition-group/Transition'

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  setModal = (isOpen) => {
    this.setState({ modalIsOpen: isOpen })
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))} >Toggle</button>
        <br/>
        <Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit >
          {state => (
            <div style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === TransitionStatus.EXITING ? 0 : 1
            }} />
          )}
        </Transition>
        <Modal
          show={this.state.modalIsOpen}
          closed={this.setModal.bind(this, false)}
        />
        {this.state.modalIsOpen && <Backdrop show />}
        <button className="Button" onClick={this.setModal.bind(this, true)} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
