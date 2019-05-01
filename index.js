import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleDeleteOptions() {
    this.setState(() =>{
      return {
        options: []
      }
    });
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }
  handleAddOption(option) {
    if(!option) {
      return "Enter valid value for item";
    } else if(this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => {
      return {
        options: this.state.options.concat(option)
      }
    });
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>        
        <Header title={title} subtitle = {subtitle}/>
        <Action
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
      );
  }
}

class Action extends Component {  
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}>What shold i do ?</button>
      </div>
    );
  }
}

class Options extends Component {
  render() {
    return (
      <div>
      <button onClick={this.props.handleDeleteOption}> Remove All</button>
      {
        this.props.options.map(x => <Option key={x} optionText={x}/>)
      }
      </div>
    );
  }
}

class Option extends Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
      e.target.elements.option.value = "";
      const error = this.props.handleAddOption(option)
      if(error) {
        this.setState(() => {
          return { error };
        });
      }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          {this.state.error && <p>{this.state.error}</p>}
          <input type="text" name="option"/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

render(<IndecisionApp/>, document.getElementById('root'));