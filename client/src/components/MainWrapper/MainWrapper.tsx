import "../../style/common/base.scss";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function MainWrapper({ children }: Props) {
  return (
    <div className="main-wrapper">
      <div className="wrapper">{children}</div>
    </div>
  );
}
