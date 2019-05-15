import React from 'react';

const Option = props => (
    <div>
      <p>{props.optionText}
        <button
          className="button button--link"
          onClick={e => {
            props.handleDeleteOption(props.optionText);
          }}>
          Remove
        </button>
      </p>
    </div>
  );

export default Option;