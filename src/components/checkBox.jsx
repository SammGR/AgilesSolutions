import React from "react";

const CheckBox = ({ onChange }) => {
  return (
    <React.Fragment>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={() => onChange("line")}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Line
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={() => onChange("bar")}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Bar
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={() => onChange("pie")}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Pie
        </label>
      </div>
    </React.Fragment>
  );
};

export default CheckBox;
