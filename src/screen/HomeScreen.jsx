import React from "react";
import { Button, Card, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import IconTextButton from "../components/miscellaneous/IconTextButton";
import { faCircleChevronDown, faClock } from "@fortawesome/free-solid-svg-icons";
import BankCard from "../components/miscellaneous/BankCard";
import OrderMenuItem from "../components/miscellaneous/OrderMenuItem";
import MyDeliver from "../components/miscellaneous/MyDeliver";

// images
import worldMap from "../assets/images/world-map.png";

const HomeScreen = ({ text }) => {
    return (
        <div className="my-3 flex gap-3">
            <div>
                <Card className="flex flex-row px-5 py-5 items-center bg-light-vanila justify-between md:w-auto md:h-72">
                    <div className="w-max">
                        <h1 className="md:text-4xl text-2xl font-bold w-11/12">All Best recipes in one place</h1>
                        <p className="md:my-3 my-1">Upload your own home-made recipe</p>
                        <Button className="bg-primary flex items-center gap-3 w-max p-3 mt-2">
                            Upload Now
                            <FontAwesomeIcon icon={faOpencart} />
                        </Button>
                    </div>

                    <img
                        src="https://i.pinimg.com/564x/78/c7/29/78c729557b59a34ec01b867e92a382b8.jpg "
                        className="w-1/3 rounded-md mix-blend-multiply"
                    />
                </Card>
            </div>
            {/* Sidebar */}
            <Card className="p-4 w-1/3 flex flex-col gap-3">
                <BankCard />
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <h1 className="font-semibold">Order Menu</h1>
                        <IconTextButton
                            text={"View All"}
                            icon={faCircleChevronDown}
                            className="flex-row-reverse text-primary cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <OrderMenuItem className="p-0" />
                        <OrderMenuItem className="p-0" />
                        <OrderMenuItem className="p-0" />
                    </div>
                </div>
                <div className="flex justify-between flex-col gap-2">
                    <h1 className="font-semibold">My Order</h1>
                    <img src={worldMap} className="rounded-lg" />
                </div>
                <div>
                    <MyDeliver name={"Salman Qadri"} status="Developer"/>
                </div>
                <Timeline className="bg-app-orange">
                    <TimelineItem>
                        <TimelineConnector/>
                        <TimelineHeader className="gap-3">
                            <TimelineIcon className="px-1.5 py-0.5 bg-primary">
                                <FontAwesomeIcon icon={faClock}/>
                            </TimelineIcon>
                            <Typography className="text-gray">
                                My Delivery time
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="gap-3">
                            <Typography className="font-semibold">
                                30 Minutes
                            </Typography>
                        </TimelineBody>
                    </TimelineItem>
                </Timeline>
            </Card>
        </div>
    );
};

export default HomeScreen;
