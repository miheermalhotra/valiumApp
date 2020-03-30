import storyBook from "./mockData/storyBook";
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios
} from "react-axios";

const getData = axios.create({
  baseURL: "/book/",
  timeout: 2000
});
