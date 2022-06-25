import { NavLink } from 'react-router-dom';

export const BlogCard = (props) => {
  const { tag } = props;
  const { title } = props;
  const { description } = props;
  const { imgUrl } = props;
  const { to } = props;

  return (
    <NavLink to={to} className="w-full">
      {/* For Small screens */}
      <div className="bg-slate-300 mx-4 my-3 flex flex-col rounded-md overflow-hidden shadow-lg hover:shadow-amber-900 md:hidden hover:-translate-y-1 hover:scale-105 duration-100">
        <img
          className="w-auto flex-none rounded-md m-3 shadow-md shadow-slate-700"
          src={imgUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-6 flex-1 py-̥5">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base pb-4">{description}</p>
        </div>
      </div>
      {/* For Large Screens */}
      <div className="hidden group mx-20 my-3  rounded-md  bg-slate-300 shadow-lg   p-3 md:flex flex-row  transition ease-in-out delay-100 justify-between leading-normal hover:-translate-y-1 hover:scale-105 duration-100  ">
        <img
          className=" h-auto w-60 flex-none bg-cover rounded-md text-center shadow-lg group-hover:shadow-slate-700  overflow-hidden "
          src={imgUrl}
          alt="Sunset in the mountains"
        />
        <div className="mb-8 ml-5 flex-1">
          <p className="text-sm text-gray-600 flex items-center">{tag}</p>
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </NavLink>
  );
};
