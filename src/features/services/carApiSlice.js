import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApiSlice = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://app.iwcygn.com/api/v1" }),
});