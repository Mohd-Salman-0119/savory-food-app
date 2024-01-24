import ChatUserItem from "./components/miscellaneous/ChatUserItem";
import FevoriteItemCard from "./components/miscellaneous/FevoriteItemCard";
import HomeItemCard from "./components/miscellaneous/HomeItemCard";
import MyDeliver from "./components/miscellaneous/MyDeliver";
import OrderItemCard from "./components/miscellaneous/OrderItemCard";
import OrderMenuItem from "./components/miscellaneous/OrderMenuItem";
import SettingItemCard from "./components/miscellaneous/SettingItemCard";

function App() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-4 p-5">
        <OrderItemCard />
        <FevoriteItemCard />
        <HomeItemCard />
        <MyDeliver />
        <OrderMenuItem />
        <ChatUserItem />
        <SettingItemCard />
      </div>
    </div>
  );
}

export default App;
