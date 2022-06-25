/* eslint-disable array-callback-return */
import Papa from 'papaparse';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const csv = require('csvtojson');

function CSVParser() {
  // State to store parsed data
  // eslint-disable-next-line no-unused-vars
  const [parsedData, setParsedData] = useState([]);

  // State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  // State to store the values
  const [values, setValues] = useState([]);

  // Merge 2 Array
  /* function arrMerge(k, v) {
    const obj = {};
    for (let i = 0; i < k.length; i += 1) {
      obj[k[i]] = v[i];
    }
    return obj;
  }
 */
  const changeHandler = (event) => {
    csv()
      .fromString(event.target.files[0])
      .then((jsonObj) => {
        console.log(`jsonObject ${jsonObj}`);
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */
      });

    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,

      skipEmptyLines: true,
      complete(results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);
        // console.log(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);
        // prev
        /* const key = rowsArray[0];
        valuesArray.map((val) => {
          const z = arrMerge(key, val);

          jsonArray.push(z);
        }); */
        // value.map()
        // Filtered Values
        setValues(valuesArray);
        // console.log(valuesArray);
        const upbtn = document.getElementById('upload');
        upbtn.className = 'hidden';
      },
    });
  };
  const navigate = useNavigate();
  const createPost = () => {
    navigate('/inventory', {
      state: { json: parsedData, key: tableRows },
    });
  };
  return (
    <div>
      {/* File Uploader */}
      <div className="flex flex-row justify-center items-center my-10">
        <button
          className="bg-white  m-4 p-6 rounded font-semibold text-violet-700 hover:bg-violet-100"
          type="button"
          onClick={createPost}
        >
          Cards
        </button>
        <input
          id="upload"
          type="file"
          name="file"
          onChange={changeHandler}
          accept=".csv"
          className="block mt-5 text-center text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:cursor-pointer file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
        />
      </div>
      {/* Table */}
      <div className="relative overflow-x-auto shadow-md rounded-lg m-3 md:m-8">
        <table className="w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              {tableRows.map((rows, index) => (
                <th key={index} scope="col" className="px-6 py-2 sm:py-3">
                  {rows}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {value.map((val, i) => (
                  <td key={i} className="px-6 py-1 sm:py-4">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CSVParser;
