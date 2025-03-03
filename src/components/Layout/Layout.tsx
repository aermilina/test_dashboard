import React from "react";
import "./styled.scss";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      <div className="container">{children}</div>
    </div>
  );
}
