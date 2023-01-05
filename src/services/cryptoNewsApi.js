import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '680f4bbbcamshca839b1b02bf550p1256a9jsn4ab75a356798',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoNewsHeader })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNews',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})


export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi