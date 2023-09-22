import React from "react";
import Button from "./Button";

const buttonName = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Football",
  "Cricket",
  "News",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonName.map((name, i) => (
        <Button key={i} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
