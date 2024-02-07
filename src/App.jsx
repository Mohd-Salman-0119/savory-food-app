import { useState } from "react";
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
import MainRoutes from "./routes/MainRoutes";
import DrawerComponents from "./components/miscellaneous/DrawerComponents";
import DrawerContainer from "./components/DrawerContainer";

function App() {
  return (
    <div>
      <MainRoutes/>
    </div>
  );
}

export default App;
