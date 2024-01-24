import FevoriteItemCard from "./components/miscellaneous/FevoriteItemCard";
import HomeItemCard from "./components/miscellaneous/HomeItemCard";
import OrderItemCard from "./components/miscellaneous/OrderItemCard";

function App() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-4 p-5">
        <OrderItemCard />
        <FevoriteItemCard />
        <HomeItemCard />
      </div>
    </div>
  );
}

export default App;
