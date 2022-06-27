import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Posts = () => {
  const { state } = useLocation();
  //   console.log(state);
  //   console.log(state.json[0]);
  //   console.log(state.key);
  const { json } = state;
  console.log(json);
  //   const { key } = state;

  // const fetchData = () => {
  //   // key.map((val, i) => {
  //   //     return 0;
  //   // });
  // };
  return (
    <div>
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
        {json.map((val) => (
          // val.availability=="AVAILABLE"
          <Card
            title={val.title}
            description={val.description}
            imgUrl={val[`image[0].url`]}
            intCol={val.interior_color}
            extCol={val.exterior_color}
            trim={val.trim}
            make={val.make}
            mileageValue={val[`mileage.value`]}
            mileageUnit={val[`mileage.unit`]}
            price={val.price}
            url={val.url}
            vehicleId={val.vehicle_id}
            className="flex items-center justify-center"
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
