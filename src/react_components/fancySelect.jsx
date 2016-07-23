import React from 'react';

const fancySelect = React.createClass({
  propTypes: {
    selectName: React.PropTypes.string.isRequired,
    selectValue: React.PropTypes.string,
    placeholder: React.PropTypes.shape({
      optionText: React.PropTypes.string.isRequired,
      optionValue: React.PropTypes.string
    }),
    selectOptions: React.PropTypes.array.isRequired,
    eventHandler: React.PropTypes.func.isRequired
  },

  eventHandler(e) {
    let {eventHandler} = this.props;
    if (eventHandler) {
      eventHandler(e);
    }
  },

  render() {
    const {selectName, placeholder, selectOptions, selectValue, eventHandler} = this.props;

    if (placeholder) {
      return (
        <label htmlFor={selectName} className="fancy-select">
          <select name={selectName} id={selectName} value={selectValue} onChange={eventHandler}>
            <option value={placeholder.optionValue}>{placeholder.optionText}</option>
            {selectOptions.map(function(option, i){
              return (
                <option value={option.optionValue} key={i}>{option.optionText}</option>
              )
            })}
          </select>
        </label>
      )
    }
    else {
      return (
        <label htmlFor={selectName} className="lm-select">
          <select name={selectName} id={selectName} value={selectValue} onChange={eventHandler}>
            {selectOptions.map(function(option, i){
              return (
                <option value={option.optionValue} key={i}>{option.optionText}</option>
              )
            })}
          </select>
        </label>
      )
    }
  }

});

module.exports.fancySelect = fancySelect;