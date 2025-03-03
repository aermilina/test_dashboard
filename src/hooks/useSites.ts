import { useState, useEffect } from "react";
import axios from "axios";
import { Site } from "../types";

export default function useSites() {
  const [sites, setSites] = useState<Site[]>([]);
  const fetchTests = async (): Promise<Site[]> => {
    const response = await axios.get<Site[]>("http://localhost:3100/sites");
    const data = response?.data;
    return data;
  };

  useEffect(() => {
    fetchTests().then((data) => setSites(data));
  }, []);
  console.log(sites);
  return sites;
}
