import { useNavigate } from "react-router-dom";

const FoodCard = ({ food }) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-xl rounded-lg relative overflow-hidden transition duration-200 hover:-translate-y-2">
      <img
        className=" hover:-mt-2 transition-all z-10 hover:-z-10 object-cover  duration-300 rounded-lg"
        src={food?.strMealThumb}
        alt=""
      />
      <div className="w-full h-full bg-opacity-60 duration-75 absolute inset-0 opacity-0 hover:opacity-100 p-2 gap-5  bg-black flex  justify-center items-center flex-col">
        <p className="text-white text-center">{food?.strMeal}</p>
        <button
          onClick={() => navigate(`/recipie/${food._id}`)}
          className="text-white"
        >
          See This Recipie
        </button>
      </div>
    </div>
  );
};

export default FoodCard;