import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

vi.mock("../../hooks", () => ({
  useTests: vi.fn().mockReturnValue([
    { id: 1, name: "Test 1", type: "CLASSIC", status: "ONLINE", siteId: 1 },
    { id: 2, name: "Test 2", type: "SERVER_SIDE", status: "DRAFT", siteId: 2 },
  ]),
  useSites: vi.fn().mockReturnValue([
    { id: 1, url: "Site 1" },
    { id: 2, url: "Site 2" },
  ]),
  useFilterTests: vi.fn().mockReturnValue([
    { id: 1, name: "Test 1", type: "CLASSIC", status: "ONLINE", siteId: 1 },
    { id: 2, name: "Test 2", type: "SERVER_SIDE", status: "DRAFT", siteId: 2 },
  ]),
  useSortTests: vi.fn().mockReturnValue({
    sortedTests: [
      { id: 1, name: "Test 1", type: "CLASSIC", status: "ONLINE", siteId: 1 },
      {
        id: 2,
        name: "Test 2",
        type: "SERVER_SIDE",
        status: "DRAFT",
        siteId: 2,
      },
    ],
    sortKey: "name",
    sortOrder: "asc",
  }),
}));

describe("Dashboard", () => {
  it("should work correctly and display results of search and title", async () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>,
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("What tests are you looking for?"),
    ).toBeInTheDocument();
    expect(screen.getByText("Test 1")).toBeInTheDocument();
    expect(screen.getByText("Test 2")).toBeInTheDocument();
  });
});
