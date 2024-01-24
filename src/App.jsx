import CategorieItemCard from "./components/miscellaneous/CategorieItemCard";
import ChatUserItem from "./components/miscellaneous/ChatUserItem";
import EvaluatedButton from "./components/miscellaneous/EvaluatedButton";
import FevoriteItemCard from "./components/miscellaneous/FevoriteItemCard";
import HomeItemCard from "./components/miscellaneous/HomeItemCard";
import MyDeliver from "./components/miscellaneous/MyDeliver";
import OrderItemCard from "./components/miscellaneous/OrderItemCard";
import OrderMenuItem from "./components/miscellaneous/OrderMenuItem";
import OutlineButton from "./components/miscellaneous/OutlineButton";
import ReviewerItemCard from "./components/miscellaneous/ReviewerItemCard";
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
        <CategorieItemCard />

        <ReviewerItemCard />
      </div>
      <div>
        <OutlineButton className="py-1.5 px-12 " />

        <EvaluatedButton className="py-3 px-8" />
      </div>
    </div>
  );
}

export default App;
