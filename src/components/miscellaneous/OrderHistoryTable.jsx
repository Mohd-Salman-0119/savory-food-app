import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import CheckBox from "./CheckBox";
import {
  Typography,
  CardBody,
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Chip,
} from "@material-tailwind/react";
import {
  orderHistoryAccordionBody,
  orderHistoryAccordionHead,
} from "../Constants/accordion";
import AccordionTable from "./AccordionTable";

const TABLE_HEAD = [
  "Date",
  "Address",
  "Total",
  "Status",
  "Card Number",
  "Action",
];

const TABLE_ROWS = [
  {
    status: true,
    total: "$14.81",
    address: "Elm Street, 23 Yogyakarta",
    distance: "2.75 Km",
    date: "Jun 25, 2024, 11:27 PM",
    cardNumber: "4042 5349 6875 8365",
  },
  {
    status: true,
    total: "$14.81",
    address: "Elm Street, 23 Yogyakarta",
    distance: "2.75 Km",
    date: "Jun 25, 2024, 11:27 PM",
    cardNumber: "4042 5349 6875 8365",
  },
  {
    status: true,
    total: "$14.81",
    address: "Elm Street, 23 Yogyakarta",
    distance: "2.75 Km",
    date: "Jun 25, 2024, 11:27 PM",
    cardNumber: "4042 5349 6875 8365",
  },
];

const OrderHistoryTable = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isVisible);
  return (
    <>
      <div className="w-full p-2 shadow-sm shadow-gray rounded-md">
        <CardBody>
          {isVisible ? (
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr className="p-3">
                  <th className="border-b border-gray bg-blue-gray-50/50 px-4">
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
                  </th>
                  {TABLE_HEAD.map((head) => (
                    <th className="border-b border-gray bg-blue-gray-50/50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="xl:text-base lg:text-sm text-xs">
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-6">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <CheckBox />
                      </Typography>
                      <div className="flex justify-between items-center gap-3">
                        <div className="p-1 bg-light-orange rounded-md">
                          <img
                            src="https://i.pinimg.com/564x/14/c2/9e/14c29ed1c3e05d765dc4ee751cbe2ceb.jpg"
                            className="w-9 h-9 mix-blend-multiply"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold">Hamburger</h1>
                          <p className="text-xs">$3.98</p>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="p-3">
                    <div>Jun 25, 2024, 11:27 PM</div>
                  </td>

                  <td className="p-3">
                    <div>
                      <h1>Elm Street, 23 Yogyakarta</h1>
                      <p>2.75 Km</p>
                    </div>
                  </td>

                  <td className="p-3">
                    <div>$14.18</div>
                  </td>

                  <td className="p-3">
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 bg-primary rounded-[50%]"></div>
                      <h1 className="text-primary">Competed</h1>
                    </div>
                  </td>
                  <td className="p-3">
                    <div>4048 5684 7826 7668</div>
                  </td>
                  <td className="p-3">
                    <div>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="overflow-hidden">
              <Accordion className="bg-white px-3 py-2 rounded-md items-center my-1 shadow-sm shadow-gray">
                <AccordionHeader className="border-none">
                  <div className="flex justify-between w-full items-center">
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
                          className="font-semibold"
                        >
                          {"Menu"}
                        </Typography>
                      </div>
                    </div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex gap-2 items-center font-semibold"
                    >
                      Status
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex gap-2 items-center font-semibold"
                    ></Typography>
                  </div>
                </AccordionHeader>
              </Accordion>
              <Accordion
                open={open === 1}
                className="bg-white px-3 py-1 rounded-md items-center shadow-sm shadow-gray"
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-none"
                >
                  <div className="flex justify-between w-full items-center">
                    <div className="flex items-center sm:gap-6 gap-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <CheckBox />
                      </Typography>

                      <Avatar
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
                        alt={"image"}
                        size="sm"
                      />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-semibold"
                        >
                          {"Alexa Liras"}
                        </Typography>
                      </div>
                    </div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex gap-2 items-center font-semibold"
                    >
                      <div className="w-3 h-3 bg-app-orange rounded-[50%]"></div>
                      <h1 className="text-app-orange">Delivering</h1>
                    </Typography>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={`${
                        open === 1
                          ? "rotate-90 transition-all duration-150"
                          : "transition-all duration-150"
                      } text-sm`}
                    />
                  </div>
                </AccordionHeader>
                <AccordionTable
                  head={orderHistoryAccordionHead}
                  body={orderHistoryAccordionBody}
                />
              </Accordion>
            </div>
          )}
        </CardBody>
      </div>
    </>
  );
};

export default OrderHistoryTable;
