import React from "react";
import PropTypes from "prop-types";

function SelectOption(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={String(props.value) || ""}
        >
          {<option value="" />}
          {props.options.map(_option => (
            <option key={_option.value} value={_option.value}>
              {_option.text}
            </option>
          ))}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

SelectOption.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

SelectOption.defaultProps = {
  error: ""
};

export default SelectOption;
