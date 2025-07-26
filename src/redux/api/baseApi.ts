import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:3000/api/v1',
    credentials:"include",
    prepareHeaders:(headers, {getState})=>{
        const token =  (getState() as RootState).auth?.token;
        console.log('token from baseApi',token);
        if(token){
            headers.set("authorization",`Bearer ${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:baseQuery,
    tagTypes:['users','user'],
    endpoints:()=>({})
})