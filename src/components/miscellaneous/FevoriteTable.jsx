import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "./CheckBox";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Menu", "Customer Since", "Order Date"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    item: "Burger",
    org: "Organization",
    online: "User since 2022",
    date: "Ordered Jun 25, 2024",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    item: "Briyani",
    org: "Developer",
    online: "User since 2021",
    date: "Ordered Jun 25, 2024",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    item: "Egg",
    org: "Projects",
    online: "User since 2024",
    date: "Ordered Jun 25, 2024",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    item: "Mutton",
    org: "Developer",
    online: "User since 2020",
    date: "Ordered Jun 25, 2024",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    item: "Manager",
    org: "Executive",
    online: "User since 2019",
    date: "Ordered Jun 25, 2024",
  },
];

const FevoriteTable = () => {
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
      <div className="h-full w-full p-2 bg-blue-600 shadow-sm shadow-gray rounded-md">
        <CardBody className="overflow-scroll">
          {isVisible ? (
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr className="p-3">
                  <th className="border-b border-gray bg-blue-gray-50/50 px-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none flex gap-12"
                    >
                      <CheckBox />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 flex gap-12"
                      >
                        <h1>Customer</h1>
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
              <tbody>
                {TABLE_ROWS.map(
                  ({ img, name, email, item, org, online, date }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-4" : "p-4";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-6">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <CheckBox />
                            </Typography>

                            <Avatar src={img} alt={name} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {online}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          ) : (
            <div className="overflow-hidden">
              <Accordion
                open={open === 1}
                className="bg-white px-3 py-1 rounded-md items-center shadow-md shadow-black"
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
                    <FontAwesomeIcon icon={faAngleRight} className={`${open === 1 ? "rotate-90 transition-all duration-150":"transition-all duration-150"} text-sm`}/>
                  </div>
                </AccordionHeader>
                <AccordionBody className="mt-1 flex flex-col">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        <th className="border-b border-gray bg-blue-gray-50/50 p-2">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70 flex gap-12 sm:text-base text-xs"
                          >
                            <h1>Menu</h1>
                          </Typography>
                        </th>
                        <th className="border-b border-gray bg-blue-gray-50/50 p-2">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70 flex gap-12 sm:text-base text-xs"
                          >
                            <h1>Customer Since</h1>
                          </Typography>
                        </th>
                        <th className="border-b border-gray bg-blue-gray-50/50 p-2">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70 flex gap-12 sm:text-base text-xs"
                          >
                            <h1>Order Date</h1>
                          </Typography>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr >
                        <td className="p-2">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal sm:text-base text-xs"
                          >
                            Fish Burger
                          </Typography>
                        </td>
                        <td className="p-2">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal sm:text-base text-xs"
                          >
                            User since 2023
                          </Typography>
                        </td>
                        <td className="p-2">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal sm:text-base text-xs"
                          >
                            Jan 25, 2024
                          </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </AccordionBody>
              </Accordion>
            </div>
          )}
        </CardBody>
      </div>
    </>
  );
};

export default FevoriteTable;
