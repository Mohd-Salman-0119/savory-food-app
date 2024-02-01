import {
     faBell,
     faBowlRice,
     faCommentDots,
     faGear,
     faHeart,
     faHouse,
     faListCheck,
     faReceipt,
     faUserPlus,
     faUtensils,
} from "@fortawesome/free-solid-svg-icons";
export const MENU_DRAWER = [
     {
          text: "Home",
          icon: faHouse,
          path: "/",
     },
     {
          text: "Food Order",
          icon: faBowlRice,
          path: "/foodOrder",
     },
     {
          text: "Fevorite Order",
          icon: faHeart,
          path: "/fevoriteMenu",
     },
     {
          text: "Messages",
          icon: faCommentDots,
          path: "/messages",
     },
     {
          text: "Order History",
          icon: faListCheck,
          path: "/orderHistory",
     },
     {
          text: "Notification",
          icon: faBell,
          path: "/notification",
     },
     {
          text: "Bills",
          icon: faReceipt,
          path: "/bills",
     },
     {
          text: "Resturants",
          icon: faUtensils,
          path: "/restaurant",
     },
     {
          text: "Drivers",
          icon: faUserPlus,
          path: "/driver",
     },
     {
          text: "Settings",
          icon: faGear,
          path: "/setting",
     },

]