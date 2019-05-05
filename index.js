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
          hasOptions={this.state.options.length > 0}
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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
    );
}

const Action = props => { 
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What shold i do ?
      </button>
    </div>
  );
}

const Options = props => {
  return (
    <div>
    <button onClick={props.handleDeleteOption}> Remove All</button>
    {
      props.options.map(x => <Option key={x} optionText={x}/>)
    }
    </div>
  );
}

const Option = props => {
  return (
    <div>
      <p>{props.optionText}</p>
    </div>
  );
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
      // if(error) {
        this.setState(() => {
          return { error };
        });
      //}
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add</button>
        </form>        
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

render(<IndecisionApp/>, document.getElementById('root'));