import React from "react";
import TestCell from "../TestCell";
import { Test } from "../../types";
import "./styles.scss";

interface Props {
  setSortKey: (key: keyof Test) => void;
  setSortOrder: (value: React.SetStateAction<"asc" | "desc">) => void;
  sortKey: keyof Test | null;
  sortOrder: "asc" | "desc";
}

export default function DashboardHead({
  setSortKey,
  setSortOrder,
  sortOrder,
}: Props) {
  const widths = [389, 100, 62, 117];
  const keys: Array<keyof Test> = ["name", "type", "status", "siteId"];

  const handleSort = (key: keyof Test) => {
    setSortKey(key);
    setSortOrder((prevOrder: string) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="header">
      {keys.map((key, index) => {
        const valueText = key === "siteId" ? "site" : key;
        const sortArrow = sortOrder === "asc" ? "↑" : "↓";
        const value = `${valueText} ${sortArrow}`;
        return (
          <TestCell
            key={key}
            onClick={() => handleSort(key)}
            value={value}
            width={widths[index]}
            color="#999999"
            fontSize={11}
            fontWeight={500}
          />
        );
      })}
    </div>
  );
}
