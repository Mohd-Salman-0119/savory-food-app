import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { MENU_DRAWER } from "../Constants/menu_drawer";
import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import logoWithText from "../../assets/icons/savory-food.png";
import image from "../../assets/icons/fast-food.png";
import IconTextButton from "./IconTextButton";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-green-600 p-3 shadow-sm shadow-gray overflow-scroll w-80 top-0 left-0 bottom-0 right-0 z-50 flex-1 h-auto sticky ">
      <Typography className="px-5 my-5 flex justify-between items-center">
        <img src={logoWithText} className="w-1/2" />
      </Typography>
      <List>
        {MENU_DRAWER.map((item, index) => (
          <ListItem
            key={index}
            className="flex gap-2 hover:bg-light-vanila hover:text-primary rounded-lg"
            onClick={() => navigate(item.path)}
          >
            <ListItemPrefix>
              <IconButton icon={item.icon} />
            </ListItemPrefix>
            {item.text}
          </ListItem>
        ))}
      </List>
      <div className="flex flex-row justify-between items-center px-3 bg-light-pink rounded-lg my-4">
        <img src={image} className="w-1/3" />

        <div className="rounded-xl p-3">
          <h1>Share your own recipes</h1>
          <IconTextButton
            text="Upload Now"
            className="py-2 px-2 bg-primary rounded-md text-white text-sm justify-center my-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
