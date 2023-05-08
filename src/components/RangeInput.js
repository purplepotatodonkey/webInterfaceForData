import React from "react";

function RangeInput({ range, setRange, setSubmittedRange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // write code to check if submitted data is valid and to set ranges appropriately
    // not going to check if index is out of bound
    const { minRow, maxRow, minCol, maxCol } = range;
    if (minRow <= maxRow && minCol <= maxCol) {
      setSubmittedRange({
      minRow: minRow,
      maxRow: maxRow,
      minCol: minCol,
      maxCol: maxCol,
      })
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRange({
      ...range,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Rows">Rows</label>
        <input type="number" id="minRow" name="minRow" onChange={handleChange} />
        <input type="number" id="maxRow" name="maxRow" onChange={handleChange} />
        <label htmlFor="Columns">Columns</label>
        <input type="number" id="minCol" name="minCol" onChange={handleChange} />
        <input type="number" id="maxCol" name="maxCol" onChange={handleChange} />
      </div>
      <div>
       <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default RangeInput;