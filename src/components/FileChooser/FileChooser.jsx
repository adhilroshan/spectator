import { useState } from "react";

function FileChooser() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    console.log(selectedFile);
  };
  const handleSubmission = () => {
    isFilePicked ? console.log(selectedFile) : null;
  };
  return (
    <div className="flex justify-center items-center p-10">
      <form className="flex items-center space-x-6">
        <label className="block">
          {/* <span className="sr-only">Choose profile photo</span> */}
          <input
            type="file"
            className="block mt-5 file:block text-center w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:cursor-pointer file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
            "
            accept=".csv,.txt"
            onChange={changeHandler}
          />
        </label>
        {/* <label className="block">
          <button
            // type="file"
            className="block w-full
            mr-4 py-2 px-4
            rounded-full border-0
            text-sm font-semibold
            bg-violet-50 text-violet-700
            hover:bg-violet-100
            "
          >
            Hi
          </button>
        </label> */}
        <div className="shrink-0">
          <button
            class="block w-full
           py-2 px-4 
            rounded-full border-0
            text-sm font-semibold
            bg-violet-50 text-violet-700
            hover:bg-violet-100"
            onFocus={handleSubmission}
          >
            Upload
          </button>
        </div>
      </form>
      <h1>
        {/* <FileHandler.hey /> */}
        {/* {" hi"} */}
      </h1>
    </div>
  );
}

export default FileChooser;
