import { useMemo } from "react";
import { Test, Site } from "../types";
import { getSiteName } from "../utils";

const sortFunction = (
  a: Test,
  b: Test,
  sortKey: keyof Test,
  sortOrder: "asc" | "desc",
  sites: Site[],
) => {
  if (sortKey === "status") {
    const ascOrder = ["ONLINE", "PAUSED", "STOPPED", "DRAFT"];
    const descOrder = ["DRAFT", "STOPPED", "PAUSED", "ONLINE"];
    const order = sortOrder === "asc" ? ascOrder : descOrder;
    return order.indexOf(a.status) - order.indexOf(b.status);
  }
  if (sortKey === "siteId") {
    const siteA = getSiteName(sites, a.siteId);
    const siteB = getSiteName(sites, b.siteId);
    return siteA.localeCompare(siteB) * (sortOrder === "asc" ? 1 : -1);
  }
  const valueA = a[sortKey];
  const valueB = b[sortKey];

  if (typeof valueA === "string" && typeof valueB === "string") {
    return valueA.localeCompare(valueB) * (sortOrder === "asc" ? 1 : -1);
  }

  return 0;
};

export default function useSortTests(
  tests: Test[],
  sortKey: keyof Test,
  sortOrder: "asc" | "desc",
  sites: Site[],
) {
  const sortedTests = useMemo(() => {
    if (!sortKey) return tests;

    return [...tests].sort((a, b) =>
      sortFunction(a, b, sortKey, sortOrder, sites),
    );
  }, [tests, sortKey, sortOrder, sites]);

  return { sortedTests, sortKey, sortOrder };
}
