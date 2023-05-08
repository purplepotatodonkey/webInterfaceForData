import Papa from "papaparse";
import React, { useState } from "react";
import './App.css';
import FileUploader from "./components/FileUploader";
import RangeInput from "./components/RangeInput";
import Table from "./components/Table";

function App() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  //State to store minimum row, maximum row, minimum column, and maximum column
  const [range, setRange] = useState({
    minRow: undefined,
    maxRow: undefined,
    minCol: undefined,
    maxCol: undefined,
  });

  //State to store filtered data
  const [submittedRange, setSubmittedRange] = useState({
    minRow: undefined,
    maxRow: undefined,
    minCol: undefined,
    maxCol: undefined,
  });

  return (
    <div>
      <FileUploader
        setParsedData={setParsedData}
        setTableRows={setTableRows}
        setValues={setValues}
        setSubmittedRange={setSubmittedRange}
      />
      <RangeInput
        range={range}
        setRange={setRange}
        setSubmittedRange={setSubmittedRange}
      />
      <Table
        tableRows={tableRows}
        values={values}
        submittedRange={submittedRange}
      />
    </div>
  );
}

export default App;