import { useState, useEffect } from "react";
import axios from "axios";
import { Test } from "../types";
import { BASE_API_URL } from "../constants";

export default function useTest() {
  const [tests, setTests] = useState<Test[]>([]);
  const fetchTests = async (): Promise<Test[]> => {
    const response = await axios.get<Test[]>(`${BASE_API_URL}/tests`);
    const data = response?.data;
    return data;
  };

  useEffect(() => {
    fetchTests().then((data) => setTests(data));
  }, []);

  return tests;
}
