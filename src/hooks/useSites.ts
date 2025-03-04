import { useState, useEffect } from "react";
import axios from "axios";
import { Site } from "../types";
import { BASE_API_URL } from "../constants";

export default function useSites() {
  const [sites, setSites] = useState<Site[]>([]);
  const fetchTests = async (): Promise<Site[]> => {
    const response = await axios.get<Site[]>(`${BASE_API_URL}/sites`);
    const data = response?.data;
    return data;
  };

  useEffect(() => {
    fetchTests().then((data) => setSites(data));
  }, []);

  return sites;
}
