/* eslint-disable react/prop-types */
const Card3 = (props) => {
  const { title } = props;
  const { mainTitle } = props;
  const { description } = props;
  const { imgUrl } = props;
  return (
    <div className="">
      <a className="relative block bg-black group rounded" href="/">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
          src={imgUrl}
          alt=""
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-slate-500 uppercase">
            {title}
          </p>

          <p className="text-2xl font-bold text-white">{mainTitle}</p>

          <div className="mt-64">
            <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-sm text-white">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card3;
