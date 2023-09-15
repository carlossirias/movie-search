import { useCallback, useRef, useState } from 'react'
import { getApiUrl } from '../services/getApiUrl'

export function useMovies({search})
{
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const moviesResult = movies.Search
  const hasMovies = movies.Response === 'True'
  
  const mappedMovies = moviesResult?.map( movies =>(
    {
      id: movies.imdbID,
      title : movies.Title || '',
      type: movies.Type || '',
      posterUrl: movies.Poster,
      year: movies.Year
    }
  ))

  const getMovies = useCallback((actualSearch) =>
  {
    const URL_MOVIES = getApiUrl(actualSearch)

    if(previousSearch.current === actualSearch) return
    
    previousSearch.current = actualSearch
    console.log(actualSearch)
    if(actualSearch)
    {
      fetch(URL_MOVIES)
      .then(res => res.json())
      .then(data => setMovies(data))  
    }
  }, [])

  return {moviesResult: mappedMovies, hasMovies, getMovies, actualSearch: previousSearch.current}
}