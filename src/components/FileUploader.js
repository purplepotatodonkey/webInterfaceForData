import React from "react";
import Papa from "papaparse";

function FileUploader({ setParsedData, setTableRows, setValues, setSubmittedRange }) {
  const parseCSV = {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      const rowsArray = [];
      const valuesArray = [];

      // Iterating data to get column name and their values
      rowsArray.push(Object.keys(results.data[0]));

      results.data.map((d) => {
        valuesArray.push(Object.values(d));
      });

      // Parsed Data Response in array format
      setParsedData(results.data);

      // Filtered Column Names
      setTableRows(rowsArray[0]);

      // Filtered Values
      setValues(valuesArray);

      setSubmittedRange({
        minRow: 1,
        maxRow: valuesArray.length + 1,
        minCol: 1,
        maxCol: rowsArray[0].length + 1,
      });
    },
  };

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], parseCSV);
  };

  return (
    <input
      type="file"
      name="file"
      onChange={changeHandler}
      accept=".csv"
    />
  );
}

export default FileUploader;
