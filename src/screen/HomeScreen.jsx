import React from "react";
import {
  faBell,
  faCircleChevronDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import SearchFeild from "../components/miscellaneous/SearchFeild";
import { Avatar, Card, IconButton, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderNavbar from "../components/miscellaneous/HeaderNavbar";
import EvaluatedButtton from "../components/miscellaneous/EvaluatedButton";
import IconTextButton from "../components/miscellaneous/IconTextButton";
import OrderMenuItem from "../components/miscellaneous/OrderMenuItem";
import worldMap from "../assets/images/world-map.png";
import MyDeliver from "../components/miscellaneous/MyDeliver";
import CategoriesItemCard from "../components/miscellaneous/CategorieItemCard";
import { CATEGORIES } from "../components/Constants/home_screen";

const HomeScreen = ({ text }) => {
  return (
    <div className="w-full px-5 p-3">
      <HeaderNavbar text={text} />
      {/* card */}
      <div className="flex my-3 gap-2">
        <div>
          <Card className="py-5 px-10 flex justify-between flex-row bg-light-vanila w-auto h-max items-center">
            <div className="flex flex-col gap-3 w-1/2">
              <h1 className="text-4xl font-bold w-11/12">
                All Best recipes in one place
              </h1>
              <p>Upload your own home-made recipe</p>
              <IconTextButton
                text="Order Now"
                icon={faOpencart}
                className="flex-row-reverse bg-primary w-max px-3.5 py-3 rounded-md text-white mt-5"
              />
            </div>

            <img
              src="https://i.pinimg.com/564x/f4/63/9f/f4639f896960a204b234e0572d7c774c.jpg"
              className="w-1/3 h-1/3 rounded-md mix-blend-multiply"
            />
          </Card>
          <div className="my-3">
            <h1 className="font-semibold text-xl">Categories</h1>
           
          </div>
        </div>

        {/* Sidebar */}
        <Card className="w-1/3 h-max p-3">
          <div>
            <div className="flex justify-between items-center px-3">
              <h1 className="font-semibold">Order Menu</h1>
              <IconTextButton
                text="View All"
                icon={faCircleChevronDown}
                className="flex-row-reverse text-primary"
              />
            </div>
            <div>
              <OrderMenuItem />
              <OrderMenuItem />
              <OrderMenuItem />
            </div>
            <div className="px-3">
              <h1 className="font-semibold">My Order</h1>
              <div className="rounded-md my-2">
                <img src={worldMap} className="rounded-xl" />
              </div>
              <MyDeliver
                avatar="https://docs.material-tailwind.com/img/face-2.jpg"
                name="Jone Doe"
                status="My Deliver"
                className="my-3"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeScreen;
