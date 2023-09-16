import { useState } from 'react'
import { MoviesSection, NoMoviesSection } from './components/Movies'
import { useMovies } from './hocks/useMovies'
import { useSearch } from './hocks/useSearch'
import './App.css'
import {Footer} from './components/FooterCarlos'
import { Counter } from './components/Counter'

function App() {
  const { search, setSearch } = useSearch();
  const { moviesResult, hasMovies, getMovies, actualSearch} = useMovies(search);
  const [firstTime, setFirstTime] = useState(true)
  

  const handleChange = (event) => {
    var valueInput = event.target.value
    if (valueInput.startsWith(' ')) return

    setSearch(valueInput)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)

    getMovies(search)

    setFirstTime(false)
    console.log(search)
  }


  return (
    <div className='w-full min-h-screen bg-gray-900 flex flex-col gap-10 items-center'>
      <header className='w-full sm:w-[1000px] flex flex-col items-center gap-5 mt-10 text-white text-center'>
        <h1 className='text-5xl font-black'>Movie <span className='text-rose-600'>Search</span></h1>
        <form action="" className='flex gap-2' onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={search} placeholder="Avengers, Harry Potter, Me before you..." className='max-sm:w-60 w-96 bg-slate-900 border border-white p-3 rounded-lg ' />
          <button type="submit" className='p-3 bg-gray-950 rounded-lg text-lg font-bold border border-white hover:bg-white hover:text-black transition'>Search</button>
        </form>
      </header>
      <main className='w-full p-5 md:w-[1000px] '>

        
        <Counter></Counter>
   

        {
          hasMovies
            ? <MoviesSection moviesResult={moviesResult} search={actualSearch}/>
            : <NoMoviesSection firstTime={firstTime} search={actualSearch}/>
        }

      </main>
      <Footer colorText={'#e11d48'} colorHover={'#022c22'} isBlack={true}></Footer>
    </div>
  )
}

export default App
