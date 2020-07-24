import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false
  }

  setModal = (isOpen) => {
    this.setState({ modalIsOpen: isOpen })
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modalIsOpen} closed={this.setModal.bind(this, false)} />
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.setModal.bind(this, true)} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
