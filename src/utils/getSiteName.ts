import { Site } from "../types";
export default function getSiteName(sites: Site[], siteId: number) {
  const site = sites.find((site) => site.id === siteId);
  return site ? site.url.replace(/(https?:\/\/)?(www\.)?/, "") : "";
}
