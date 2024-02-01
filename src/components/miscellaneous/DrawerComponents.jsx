import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import logoWithText from "../../assets/icons/savory-food.png";
import image from "../../assets/icons/fast-food.png";
import { MENU_DRAWER } from "../Constants/menu_drawer";
import IconButton from "./IconButton";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import IconTextButton from "./IconTextButton";
import { useNavigate } from "react-router-dom";

const DrawerComponents = ({ isOpen, onHandleBurgur }) => {
  const navigate = useNavigate();
  //   const [close, setClose] = useState(false);

  const closeDrawer = () => onHandleBurgur(!isOpen);

  return (
    <Drawer
      open={isOpen}
      className={`bg-white p-3 shadow-sm shadow-gray overflow-scroll fixed top-0 left-0 bottom-0 z-50 `}
    >
      <Typography className="px-5 my-5 flex justify-between items-center">
        <img src={logoWithText} className="w-1/2" />
        <IconButton icon={faMultiply} onClick={closeDrawer} />
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
    </Drawer>
  );
};

export default DrawerComponents;
