import React from "react";
import { TiArrowBack } from "react-icons/ti";

type Props = {};

const GoBack = (props: Props) => {
  return (
    <div>
      {" "}
      <a href="#home">
        <TiArrowBack size={24} />
      </a>
    </div>
  );
};

export default GoBack;
