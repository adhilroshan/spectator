import Papa from 'papaparse';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardView = () => {
  // State to store parsed data
  // eslint-disable-next-line no-unused-vars
  const [parsedData, setParsedData] = useState([]);

  // State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  // State to store the values
  //   const [values, setValues] = useState([]);
  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,

      skipEmptyLines: true,
      complete(results) {
        const rowsArray = [];
        // const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          //   valuesArray.push(Object.values(d));
          return 0;
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        // setValues(valuesArray);
        const upbtn = document.getElementById('upload');
        upbtn.className = 'hidden';
        // const ccds = document.getElementById('create-cards');
      },
    });
  };
  const navigate = useNavigate();
  const createPost = () => {
    navigate('/posts', {
      state: { json: parsedData, key: tableRows },
    });
  };
  return (
    <div>
      {/* File Uploader */}
      <div className="flex flex-col md:flex-row justify-center items-center my-20">
        <input
          id="upload"
          type="file"
          name="file"
          onChange={changeHandler}
          accept=".csv"
          className="block  md:mt-5 ml-32 md:ml-0 text-center text-sm text-slate-500
        md:file:mr-4 file:block md:file:inline file:py-2 file:px-4
        file:rounded-full file:cursor-pointer file:border-0
        file:text-sm file:font-semibold 
        file:bg-violet-50 file:text-violet-700
      active:hover:file:bg-violet-100 "
        />
        <button
          id="create-cards"
          className="bg-violet-50 text-sm -ml-4 md:ml-0 mt-10 md:mt-5 py-2 px-4 rounded-full font-semibold text-violet-700 hover:active:bg-violet-100"
          type="button"
          onClick={createPost}
          onTouchStart={createPost}
        >
          Create Cards
        </button>
      </div>
    </div>
  );
};

export default CardView;
