import axios from "axios";

export const publicFetcher = <D>(url: string) =>
  axios.get<D>(url).then((res) => res.data);
