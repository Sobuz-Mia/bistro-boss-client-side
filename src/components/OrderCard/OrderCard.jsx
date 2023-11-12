const OrderCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-5">
        
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-stone-600 text-white absolute right-0 mr-5 mt-5 px-3 py-1 rounded-lg">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
