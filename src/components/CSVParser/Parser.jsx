const csv = require('csvtojson');

const Parser = () => {
  const PromisifiedCsvToJson = (csvfile) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsText(csvfile, 'UTF-8');
      reader.onload = () => {
        csv()
          .fromString(reader.result)
          .then((jsonArrayObj) => {
            resolve(jsonArrayObj);
          });
      };
    });
  return (
    <div>
      {/* File Uploader */}
      <div className="flex flex-row justify-center items-center my-10">
        <input
          id="upload"
          type="file"
          name="file"
          onChange={PromisifiedCsvToJson}
          accept=".csv"
          className="block mt-5 text-center text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:cursor-pointer file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
        />
      </div>
    </div>
  );
};

export default Parser;
