import React from "react";

const ChatUserItem = () => {
  return (
    <div className="flex justify-between p-3 h-min items-center rounded-xl shadow-sm shadow-gray">
      <div className="flex justify-between items-center gap-3">
        <div className="p-1 rounded-md">
          <img
            src="https://media.licdn.com/dms/image/D4D35AQGHNPEsMV2nkw/profile-framedphoto-shrink_400_400/0/1699471972518?e=1706706000&v=beta&t=_LxOZd4IsZbukknYu3vTzrEAMqZLUZuPDWC6y3ek8Rw"
            className="w-9 rounded-[50%] h-9"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <h1 className="font-semibold">Salman Qadri</h1>
          <p className="text-xs line-clamp-1">I am a MERN Stack Developer</p>
        </div>
      </div>
      <p>10:56 PM</p>
    </div>
  );
};

export default ChatUserItem;
