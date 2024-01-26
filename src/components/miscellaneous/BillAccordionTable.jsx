import {
  Accordion,
  AccordionHeader,
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import CheckBox from "./CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AccordionTable from "./AccordionTable";
import {
  orderHistoryAccordionBody,
  orderHistoryAccordionHead,
} from "../Constants/accordion";
import IconTextButton from "./IconTextButton";
import { OrderItem } from "./OrderItemCard";

const TABLE_HEAD = ["Status", "Address", "Date", "Total", "Payment Method"];

const BillAccordionTable = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="h-full w-full p-2 shadow-sm shadow-gray rounded-md">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr className="p-3">
              <th className="border-b border-gray bg-blue-gray-50/50 px-4">
                <div className="flex items-center justify-between sm:gap-4 gap-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none flex gap-8"
                  >
                    <CheckBox />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 flex gap-12"
                    >
                      <h1>Menu</h1>
                    </Typography>
                  </Typography>
                </div>
              </th>

              {TABLE_HEAD.map((item) => (
                <th className="border-b border-gray bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 flex gap-12"
                  >
                    {item}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="xl:text-base lg:text-sm text-xs">
            <tr onClick={handleOpen}>
              <td className="p-4">
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
                      className="font-medium"
                    >
                      {"Order #1"}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex gap-2 items-center font-medium"
                >
                  <IconTextButton
                    text={"Completed"}
                    className="bg-primary/30 text-primary rounded-md px-2"
                  />
                </Typography>
              </td>
              <td className="p-3">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex gap-2 items-center font-normal"
                >
                  8585 Green Road
                </Typography>
              </td>
              <td className="p-3">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex gap-2 items-center font-normal"
                >
                  26/01/2024{" "}
                  <span className="w-1 h-1 rounded-[50%] bg-black"></span> 11:46
                  AM
                </Typography>
              </td>
              <td className="p-3">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex gap-2 items-center font-normal"
                >
                  $5.36
                </Typography>
              </td>
              <td className="p-3">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex gap-2 items-center font-normal justify-between"
                >
                  <h1>Cash</h1>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={`${
                      open === 1
                        ? "rotate-90 transition-all duration-150"
                        : "transition-all duration-150"
                    } text-sm`}
                  />
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BillAccordionTable;
