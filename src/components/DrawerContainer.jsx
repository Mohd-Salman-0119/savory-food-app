import React, { useEffect, useState } from "react";
import logoWithoutText from "../assets/icons/logo.png";
import IconButton from "./miscellaneous/IconButton";
import {
  faBars,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import DrawerComponents from "./miscellaneous/DrawerComponents";
import Sidebar from "./miscellaneous/Sidebar";

const DrawerContainer = () => {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);
  const [isVisibleOnSmall, setIsVisibleOnSmall] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsVisibleOnSmall(false);
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisibleOnSmall(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBurger = () => {
    setIsVisibleOnSmall(true);
    setIsOpen((p) => !p);
  };
  console.log("IsVisible", isVisible);
  console.log("isOpen", isOpen);

  return (
    <div>
      {/* Small screen bar */}
      <div className="flex justify-between p-2 items-center md:hidden z-0 sticky top-0 left-0 right-0">
        <div>
          <img src={logoWithoutText} className="w-10" />
        </div>
        <div className="flex gap-2 ">
          <IconButton
            icon={faMagnifyingGlass}
            className="px-2 py-1 rounded-full bg-white w-max"
          />
          <IconButton
            icon={faBell}
            className="px-2 py-1 rounded-full bg-white w-max"
          />
          <IconButton
            icon={faBars}
            className="px-2 py-1 rounded-full bg-white w-max"
            onClick={handleBurger}
          />
        </div>
      </div>
      {isVisibleOnSmall && (
        <DrawerComponents isOpen={isOpen} onHandleBurgur={setIsOpen} />
      )}

      {isVisible && <Sidebar />}
    </div>
  );
};

export default DrawerContainer;
