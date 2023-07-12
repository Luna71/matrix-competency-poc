import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const submissionApi = createApi({
  reducerPath: "submissionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/submission",
  }),
  endpoints: (builder) => ({
    getSubmission: builder.query({
      query: () => "/",
    }),
    createSubmission: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
    getConfirmedSubmission: builder.query({
      query: () => "/confirmed",
    }),
    createConfirmedSubmission: builder.mutation({
      query: (body) => ({
        url: "/confirmed",
        method: "POST",
        body,
      }),
    }),
  }),
});

export default submissionApi;
export const {
  useCreateSubmissionMutation,
  useGetSubmissionQuery,
  useGetConfirmedSubmissionQuery,
  useCreateConfirmedSubmissionMutation,
} = submissionApi;
