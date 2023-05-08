import React from "react";

function Table({ tableRows, values, submittedRange }) {
  return (
    <table>
      <thead>
        <tr>
          {tableRows.map((rows, index) => {
            // Filter the columns based on the specified range
            if (
              index >= submittedRange.minCol - 1 &&
              index < submittedRange.maxCol
            ) {
              return <th key={index}>{rows}</th>;
            } else {
              return null;
            }
          })}
        </tr>
      </thead>
      <tbody>
        {values.map((value, index) => {
          // Filter the rows based on the specified range
          if (
            index >= submittedRange.minRow - 1 &&
            index < submittedRange.maxRow
          ) {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  // Filter the columns based on the specified range
                  if (
                    i >= submittedRange.minCol - 1 &&
                    i < submittedRange.maxCol
                  ) {
                    return <td key={i}>{val}</td>;
                  } else {
                    return null;
                  }
                })}
              </tr>
            );
          } else {
            return null;
          }
        })}
      </tbody>
    </table>
  );
}

export default Table;
