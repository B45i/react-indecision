import React, { Component } from 'react';


import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'

export default class IndecisionApp extends Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  }
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = optionToRemove => {
    this.setState((prevState) => ({
      options: prevState.options.filter(x => x !== optionToRemove)
    }));
  }

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => ({ selectedOption: option }));
  }

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value for item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({ options: this.state.options.concat(option) }));
  }

  handleClearSelection = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) { }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentwillUnmount() {
    console.log("component will unMount");
  }



  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelection={this.handleClearSelection}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};