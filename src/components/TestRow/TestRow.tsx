import React from "react";
import { Test, Site } from "../../types";
import { getSiteName } from "../../utils";
import TestCell from "../TestCell";
import "./styles.scss";
import { colorScheme } from "./colorScheme";

interface Props {
  test: Test;
  index: number;
  sites: Site[];
}

export default function TestRow({ test, index, sites }: Props) {
  const { id, siteId, name, type, status } = test;
  const site = getSiteName(sites, siteId);
  const normalizedSite = site?.replace(/(https?:\/\/)?(www\.)?/, "");
  const color = colorScheme?.find((item) => item.status === status)?.color;
  const statusText =
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  const backgroundColors = ["#E14165", "#C2C2FF", "#8686FF", "#C2C2FF"];
  const backgroundColor = backgroundColors[index % backgroundColors.length];
  const style = {
    "--background": backgroundColor,
  } as React.CSSProperties;
  return (
    <div key={id} className="row">
      <div className="delimeter" style={style} />
      <TestCell
        value={name}
        width={389}
        fontSize={13}
        fontWeight={500}
        color="#474747"
      />
      <TestCell value={type} width={100} />
      <TestCell
        value={statusText}
        width={62}
        fontWeight={500}
        color={color || "#5C5C5C"}
      />
      <TestCell value={normalizedSite} width={117} />
      <TestCell btn={status === "DRAFT" ? "finalize" : "results"} id={id} />
    </div>
  );
}
