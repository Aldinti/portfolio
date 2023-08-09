import React from "react";
import { TiArrowBack } from "react-icons/ti";

type Props = {};

const GoBack = (props: Props) => {
  return (
    <div>
      {" "}
      <a href="#home" className="hover:text-yellow-500">
        <TiArrowBack size={24} />
      </a>
    </div>
  );
};

export default GoBack;
