import { NavLink } from 'react-router-dom';

export default function OldCard() {
  return (
    <div className="text-center bg-hero bg-cover rounded-md m-10 w-4/5">
      <div className=" backdrop-blur-sm p-14 sm:p-20  rounded-md">
        <div className="text-6xl sm:text-7xl lg:text-8xl text-ellipsis font-Rampart text-gray-100 ">
          CSV Viewer
        </div>
        {/* <FileChooser/> */}
        <NavLink to="/parse">
          <button
            type="button"
            className="font-mono bg-transparent text-sm md:text-base mx-auto mt-10 block hover:bg-gray-800 text-white font-semibold hover:text-amber-300 py-2 px-4 border border-white hover:border-transparent rounded"
          >
            Get Started -&gt;
          </button>
        </NavLink>
      </div>
    </div>
  );
}
