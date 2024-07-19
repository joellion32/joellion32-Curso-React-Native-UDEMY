import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    params: {
        api_key: process.env.EXPO_PUBLIC_API_KEY,
        language: 'es'
    }
})