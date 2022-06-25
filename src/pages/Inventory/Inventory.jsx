import { useLocation } from 'react-router-dom';

const Inventory = () => {
  const { state } = useLocation();
  //   console.log(state);
  //   console.log(state.json[0]);
  //   console.log(state.key);
  const { json } = state;
  console.log(json);
  //   const { key } = state;
  const imgArray = (val) => {
    console.log(val);
  };
  const fetchData = () => {
    // key.map((val, i) => {
    //     return 0;
    // });
  };
  return (
    <div>
      Inventory
      <button
        onClick={fetchData}
        className="bg-white rounded p-5 m-5"
        type="button"
      >
        Hello
      </button>
      <div className="m-5">
        {json.map((val, i) => (
          <div className="m-10 p-5">
            <img
              src={val[`image[${i}].url`]}
              alt={i}
              className="w-screen m-10"
            />
            <button
              type="button"
              className="bg-red-100 rounded p-10 mx-auto my-10"
              onClick={() => imgArray(val)}
            >
              Click Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
