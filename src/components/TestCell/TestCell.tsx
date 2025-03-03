import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface Props {
  value?: string;
  btn?: "results" | "finalize";
  id?: number;
  onClick?: () => void;
  width?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
}

export default function TestCell({
  value,
  btn,
  id,
  onClick,
  width,
  fontSize,
  fontWeight,
  color,
}: Props) {
  const style = {
    "--width": width ? `${width}px` : undefined,
    "--font-weight": fontWeight ? fontWeight : undefined,
    "--font-size": fontSize ? `${fontSize}px` : undefined,
    "--color": color ? `${color}` : undefined,
  } as React.CSSProperties;

  if (btn) {
    return (
      <Link
        to={btn === "results" ? `/results/${id}` : `/finalize/${id}`}
        className={btn === "results" ? "btn results" : "btn finalize"}
        style={style}
      >
        {btn === "results" ? "Results" : "Finalize"}
      </Link>
    );
  }
  return (
    <div className="cell" onClick={onClick} style={style}>
      {value}
    </div>
  );
}
