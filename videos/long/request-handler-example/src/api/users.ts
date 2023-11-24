import axios from "axios";
import { requestHandler } from "./requestHandler";

interface User {
  id: number;
  name: string;
}

interface GetUsersParams {
  limit?: number;
  page?: number;
}

export const getUsers = requestHandler<GetUsersParams, User[]>((params) =>
  axios.get("/api/users", { params })
);
