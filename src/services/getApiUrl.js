import { API_KEY } from "./api";

export function getApiUrl(actualSearch)
{
    return `https://www.omdbapi.com/?apikey=${API_KEY}&s=${actualSearch}`
}
