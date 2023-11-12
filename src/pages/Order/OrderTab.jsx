import OrderCard from "../../components/OrderCard/OrderCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((item) => (
        <OrderCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default OrderTab;
