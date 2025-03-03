import React, { useState } from "react";
import { Test } from "../../types/";
import { useTests, useSites, useFilterTests, useSortTests } from "../../hooks";
import {
  Search,
  TestRow,
  DashBoardHead,
  Layout,
  Placeholder,
} from "../../components";

const Dashboard = () => {
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState(search || "");
  const [sortKey, setSortKey] = useState<keyof Test>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const sites = useSites();

  const tests = useTests();
  const filteredTests = useFilterTests(tests, search);
  const { sortedTests } = useSortTests(
    filteredTests,
    sortKey,
    sortOrder,
    sites,
  );

  return (
    <Layout title="Dashboard">
      <Search
        setSearch={setSearch}
        searchCount={sortedTests.length}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {sortedTests.length > 0 && (
        <div>
          <DashBoardHead
            sortKey={sortKey}
            sortOrder={sortOrder}
            setSortKey={setSortKey}
            setSortOrder={setSortOrder}
          />
          {sortedTests.map((test: Test, index: number) => (
            <TestRow test={test} index={index} sites={sites} />
          ))}
        </div>
      )}
      {sortedTests.length === 0 && (
        <Placeholder setSearch={setSearch} setInputValue={setInputValue} />
      )}
    </Layout>
  );
};

export default Dashboard;
