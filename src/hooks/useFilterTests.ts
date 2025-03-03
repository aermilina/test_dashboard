import { useMemo } from "react";
import { Test } from "../types";

export default function useFilterTests(tests: Test[], search: string) {
  const filteredTests = useMemo(() => {
    return tests.filter((test) =>
      Object.values(test).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(search.toLowerCase());
        }
        if (typeof value === "number") {
          return value.toString().includes(search);
        }
        return false;
      }),
    );
  }, [tests, search]);

  return filteredTests;
}
