import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';



class IndecisionApp extends Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["one", "two", "three"];
    return (
      <div>        
        <Header title={title} subtitle = {subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
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
        <button>What shold i do ?</button>
      </div>
    );
  }
}

class Options extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert('remove a;;');
  }
  render() {
    return (
      <div>
      <button onClick={this.handleRemoveAll}> Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

render(<IndecisionApp/>, document.getElementById('root'));