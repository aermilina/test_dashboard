import { useState, useEffect } from "react";
import axios from "axios";
import { Test } from "../types";

export default function useTest() {
  const [tests, setTests] = useState<Test[]>([]);
  const fetchTests = async (): Promise<Test[]> => {
    const response = await axios.get<Test[]>("http://localhost:3100/tests");
    const data = response?.data;
    return data;
  };

  useEffect(() => {
    fetchTests().then((data) => setTests(data));
  }, []);
  console.log(tests);

  return tests;
}
