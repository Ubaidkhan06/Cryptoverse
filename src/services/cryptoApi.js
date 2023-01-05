import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '680f4bbbcamshca839b1b02bf550p1256a9jsn4ab75a356798',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoAPi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) =>({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory : builder.query({
            query : ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/?timePeriod=${timePeriod}`)
        }),
        getCryptoExchange : builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}/exchanges/?limit=50`)
        })

    })
})


export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetCryptoExchangeQuery

} = cryptoAPi   
