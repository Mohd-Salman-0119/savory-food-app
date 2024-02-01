import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEllipsisVertical,
  faStar,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import AccordionTable from "./AccordionTable";
import {
  orderHistoryAccordionBody,
  orderHistoryAccordionHead,
} from "../Constants/accordion";
import IconTextButton from "./IconTextButton";
import { DeliveryInfo, OrderItem } from "./OrderItemCard";

const TABLE_HEAD = ["Address", "Date", "Total", "Payment"];
const TABLE_BODY = ["8585 Green Road", "31/01/2027 - 10:38", "$5.39", "Cash"];

const BillAccordionTable = () => {
  const [open, setOpen] = useState(0);
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="h-full w-full p-2 shadow-sm shadow-gray rounded-md">
        <div className="overflow-hidden">
          <Accordion className="bg-white px-3 py-2 rounded-md items-center my-1">
            <AccordionHeader className="border-none">
              <div className="grid grid-cols-2 md:grid-cols-6 justify-between w-full items-center">
                <div className="flex items-center sm:gap-6 gap-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <CheckBox />
                  </Typography>
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {"Menu"}
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex gap-2 items-center font-normal"
                >
                  Status
                </Typography>
                {TABLE_HEAD.map((item, index) => (
                  <Typography
                    key={index}
                    variant="small"
                    color="blue-gray"
                    className="md:flex hidden gap-2 items-center font-normal"
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            </AccordionHeader>
          </Accordion>
          <Accordion
            open={open === 1}
            className={`${
              open === 1 && "bg-primary text-white"
            }  rounded-md items-center border-gray shadow-xl shadow-gray`}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-none px-3 py-2 rounded-md"
            >
              <div className="grid grid-cols-2 md:grid-cols-6 md:gap-3 justify-between w-full items-center">
                <div className="flex items-center sm:gap-6 gap-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="md:text-base text-xs"
                  >
                    <CheckBox />
                  </Typography>

                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="md:text-base text-xs"
                  >
                    {"Order #1"}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex gap-2 items-center font-medium justify-between md:text-base text-xs"
                >
                  <IconTextButton
                    text={"Completed"}
                    className={`bg-primary/30 text-primary rounded-md px-2  ${
                      open === 1
                        ? "bg-white text-primary"
                        : "bg-primary/30 text-primary"
                    } `}
                  />
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className={`text-sm md:hidden flex`}
                  />
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-sm hidden md:flex"
                >
                  {"8585 Green Road"}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-sm hidden md:flex"
                >
                  {"26/01/2024"}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-sm hidden md:flex"
                >
                  {"$5.36"}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="justify-between items-center text-sm hidden md:flex"
                >
                  <p>Cash</p>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={`${
                      open === 1
                        ? "rotate-90 transition-all duration-150"
                        : "transition-all duration-150"
                    } text-sm`}
                  />
                </Typography>
              </div>
            </AccordionHeader>

            <AccordionBody className="md:bg-light-blue bg-white text-black shadow-md shadow-gray rounded-b-md">
              <BillTable />
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default BillAccordionTable;

const BillTable = () => {
  return (
    <div className="h-full w-full p-2 flex md:flex-row flex-col justify-between items-center">
      <div className="w-full md:border-r md:border-b-0 border-b border-gray md:p-4 p-1">
        <h1 className="font-semibold">Order Menu</h1>
        <div className="my-3 lg:text-base text-xs">
          <OrderItem />
          <OrderItem />
        </div>
      </div>
      <div className="w-full md:border-r border-b md:border-b-0 border-gray md:p-4 p-1">
        <h1 className="font-semibold">Order Menu</h1>
        <div className="my-3">
          <h1 className="font-semibold lg:text-base text-sm">
            Fast Food Resto
          </h1>
          <div className="flex gap-5 my-2">
            <div className="flex gap-2 items-center lg:text-base text-xs">
              <FontAwesomeIcon icon={faStar} className="text-app-orange" />
              <p>5.0</p>
            </div>
            <div className="flex gap-2 items-center lg:text-base text-xs">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-black/50 text-[4px]"
              />
              <p>1k+ Reviews</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:text-base text-xs">
            <DeliveryInfo name="Delivery Time" value="10 Min" />
            <DeliveryInfo name="Distance" value="2.5 Km" />
          </div>
        </div>
      </div>
      <div className="w-full md:border-r border-b md:border-b-0 border-gray p-2 flex flex-col gap-2 md:py-5 lg:text-base text-xs">
        <DeliveryInfo name="Status" value="Date" />
        <DeliveryInfo
          name="Completed"
          value="Jan1,2024"
          className="font-semibold"
        />
        <DeliveryInfo name="Bills" value="Date Paid" />
        <DeliveryInfo
          name="Order #1"
          value="Jan1,2024"
          className="font-semibold"
        />
      </div>
      <div className="w-full p-2 flex flex-col gap-2 md:py-5 lg:text-base text-xs">
        <h1>Total</h1>
        <h1 className="font-semibold">$5.39</h1>
      </div>
    </div>
  );
};
