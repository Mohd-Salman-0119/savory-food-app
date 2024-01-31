import BillAccordionTable from "./components/miscellaneous/BillAccordionTable";
import CategorieItemCard from "./components/miscellaneous/CategorieItemCard";
import ChatUserItem from "./components/miscellaneous/ChatUserItem";
import EvaluatedButton from "./components/miscellaneous/EvaluatedButton";
import FevoriteItemCard from "./components/miscellaneous/FevoriteItemCard";
import FevoriteTable from "./components/miscellaneous/FevoriteTable";
import HomeItemCard from "./components/miscellaneous/HomeItemCard";
import MyDeliver from "./components/miscellaneous/MyDeliver";
import OrderHistoryTable from "./components/miscellaneous/OrderHistoryTable";
import OrderItemCard from "./components/miscellaneous/OrderItemCard";
import OrderMenuItem from "./components/miscellaneous/OrderMenuItem";
import OutlineButton from "./components/miscellaneous/OutlineButton";
import ReviewerItemCard from "./components/miscellaneous/ReviewerItemCard";
import SearchFeild from "./components/miscellaneous/SearchFeild";
import SettingItemCard from "./components/miscellaneous/SettingItemCard";

function App() {
  return (
    <div className="p-5 flex flex-col gap-6">
      <BillAccordionTable />
    </div>
  );
}

export default App;
