import axios from "axios";
import {
  UpdateSetupRequest,
  FetchSetupResponse,
  UpdateSetupResponse,
} from "./setup-data.types";

export const fetchSetup = () => {
  return axios.get<FetchSetupResponse>("/api/setup");
};

export const updateSetupData = (requestBody: UpdateSetupRequest) => {
  return axios.post<UpdateSetupResponse>("/api/setup", requestBody);
};
