import React from 'react';

import Option from './Option';

const Options = props => (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your options</h3>
        <button 
          className="button button--link"
          onClick={props.handleDeleteOptions}>
          Remove All
        </button>
      </div>
      {props.options.length === 0 && <p>Please add options to get started</p>}
      {
        props.options.map(x => (
          <Option
            key={x}
            optionText={x}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );

export default Options;