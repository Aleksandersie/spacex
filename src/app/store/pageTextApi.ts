import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { MAIN_HOST } from "../host";

export const pageTextApi = createApi({
    reducerPath: "pageTextApi",
    baseQuery: fetchBaseQuery({ baseUrl: MAIN_HOST }),
    tagTypes: ["pageText"],
    endpoints: (builder) => ({

        getPageText: builder.query({
            query: (arg) => {

                return {
                    url: "/api/pageText",

                }
            },
            providesTags: ["pageText"]
        }),

        updatePageText: builder.mutation({
            query: (payload) => ({
                url: "/api/pageText",
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["pageText"],
        }),

   
    })
})

export const { useGetPageTextQuery,useUpdatePageTextMutation } = pageTextApi 