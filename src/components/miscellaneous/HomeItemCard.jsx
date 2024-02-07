import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const HomeItemCard = ({ image, icon, title, description, price, btnText, btnIcon }) => {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike((p) => !p);
    };
    return (
        <div className="bg-light-blue p-3 flex md:flex-col justify-between w-auto rounded-md z-0 gap-2 items-center border-2 border-white">
            <div className="md:w-full">
                <Button variant="gradient" className="sm:px-3 px-1.5 py-1.5 sm:text-base text-xs bg-light-sky text-app-sky rounded-md shadow-sm">
                    50% OFF
                </Button>
                <div className="sm:flex justify-center">

                    <img
                        src="https://i.pinimg.com/564x/50/7e/0d/507e0d8a384c12c41f2e67f41cfd19b7.jpg"
                        className="w-32 rounded-[50%] border-2 border-white sm:m-4 m-1"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold mt-2 text-sm sm:text-lg">Italian Cuisine</h1>
                        <FontAwesomeIcon
                            icon={like ? faSolidHeart : faHeart}
                            className="text-sm sm:text-xl text-red-500"
                            onClick={handleLike}
                        />
                    </div>
                    <p className="mt-1 text-gray text-xs sm:text-sm sm:w-1/2 md:w-2/3">Delicious mashroom burger a savor, vegetarian delight</p>
                </div>
                <div>
                    <div className="flex justify-between items-center mt-2">
                        <h2 className="font-bold text-lg sm:text-xl">$9.89</h2>
                        <IconButton className="bg-white text-primary sm:p-3 px-2 py-1 text-sm shadow-none rounded-md">
                            <FontAwesomeIcon icon={faPlus} onClick={handleLike} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItemCard;
