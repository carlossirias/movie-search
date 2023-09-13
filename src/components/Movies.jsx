import { toCapitalCase } from "../services/capitalCase"

// eslint-disable-next-line react/prop-types
export function MoviesSection({ moviesResult, search }) {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <h2 className="mb-6 text-2xl font-bold text-white">{moviesResult.length} Results for: <span className="text-rose-500 ">{search}</span></h2>
      <section className='section__movies w-full gap-5'>
        {/* eslint-disable-next-line react/prop-types*/}
        {moviesResult.map(movies =>
        (
          <article key={movies.id} className="movie__container relative overflow-hidden rounded-lg bg-gray-800 w-full text-white shadow flex flex-col items-center gap-2 place-content-between hover:before:opacity-50 before:transition">
            <div className="movie__image__container w-full h-full transition ">
              <img src={movies.posterUrl} alt="" className='w-full h-full  rounded-sm min-h-[300px] object-cover ' />
            </div>

            <div className="movie__info__container hover:opacity-100 gap-2 text-center transition">
              <p className='  px-3 text-xl font-bold text-gray-50'>{movies.title}</p>
              <span className={movies.type == 'movie' ? 'text-green-400 font-semibold' : 'text-sky-400 font-semibold'}>{toCapitalCase(movies.type)}</span>
              <span className=''>Year: {movies.year}</span>
            </div>

          </article>
        )
        )}
      </section>
    </>
  )
}

// eslint-disable-next-line react/prop-types
export function NoMoviesSection({ firstTime, search }) {
  if (firstTime) return
  return (
    <section className="w-100 h-96 flex items-center justify-center">
      <p className="text-2xl text-white font-extrabold">No movies found for <span className="text-rose-500 ">{search}</span> :c</p>
    </section>
  )
}