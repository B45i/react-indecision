import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected option"
    onRequestClose={props.handleClearSelection}
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p> {props.selectedOption} </p>}
    <button onClick={props.handleClearSelection}>Okay</button>
  </Modal>
);

export default OptionModal;