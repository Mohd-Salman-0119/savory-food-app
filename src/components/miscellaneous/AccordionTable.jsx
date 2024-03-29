import { AccordionBody, Typography } from "@material-tailwind/react";
import React from "react";

const AccordionTable = ({ head, body }) => {
  return (
    <AccordionBody className="mt-1 flex flex-col bg-white w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {head.map((item, index) => (
              <th
                className="border-b border-gray bg-blue-gray-50/50 p-2"
                key={index}
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 flex gap-12 sm:text-base text-xs"
                >
                  <h1>{item}</h1>
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {body.map((item, index) => (
              <td className="p-2" key={index}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal sm:text-base text-xs"
                >
                  <h1>{item}</h1>
                </Typography>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </AccordionBody>
  );
};

export default AccordionTable;
/*
 
*/
