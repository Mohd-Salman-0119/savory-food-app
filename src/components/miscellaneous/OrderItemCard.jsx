import React from "react";
import IconTextButton from "./IconTextButton";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";

const OrderItemCard = () => {
  return (
    <div className="rounded-xl shadow-sm shadow-gray flex flex-col gap-2 py-3">
      <div className="px-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Order #1</h1>
          <IconTextButton
            icon={faStar}
            text="5.0K"
            className="rounded-md bg-primary text-white w-min px-3 flex justify-between"
          />
        </div>

        <p className="text-gray">Jun 24, 2023, 12:35 PM</p>
      </div>
      <div className="overflow-scroll h-[8.5rem]">
        <OrderItem className="px-3" />
        <OrderItem className="px-3" />
      </div>

      <DeliveryInfo
        className="bg-light-vanila p-3"
        name="Delivery Time"
        value="10 Min"
      />
      <DeliveryInfo
        className="bg-light-vanila p-3"
        name="Distance"
        value="2.5 Km"
      />

      <div className="p-3 flex justify-between items-center">
        <div>
          <p className="text-xs">x2 Item</p>
          <h3 className="font-semibold">$11.23</h3>
        </div>
        <IconTextButton
          icon={faCheck}
          text={"Completed"}
          className="border-[1px] border-gray text-primary px-4 rounded-md py-1 flex justify-between "
        />
      </div>
    </div>
  );
};

export default OrderItemCard;

export const OrderItem = ({ children }) => {
  return (
    <div className={`flex justify-between items-center mt-2${children}`}>
      <div className="flex gap-3 items-center">
        <img
          src="https://i.pinimg.com/564x/ac/e2/18/ace218a4f4b81019717b67dffe6dfa45.jpg"
          className="w-12 mix-blend-multiply"
        />
        <div>
          <h5 className="font-semibold">Italian Cuisine</h5>
          <p className="text-gray">x1</p>
        </div>
      </div>
      <p className="font-semibold">+$9.98</p>
    </div>
  );
};

// todo: need to pass prpes
export const DeliveryInfo = ({ className, name, value }) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <div className="flex justify-between">
        <h5>{name}</h5>
        <h5 className="font-semibold">{value}</h5>
      </div>
    </div>
  );
};


