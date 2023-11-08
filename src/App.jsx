import { useState, useEffect } from 'react'
import './App.css'
import  SearchIcon from './Search.svg'
import MovieCard from './MovieCard';

const Api_URL = 'http://www.omdbapi.com?apikey=569c0805';
 
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
 
  
  useEffect(()=>{
   searchMovies('Superman')
  }, [])

   const searchMovies = async(title) =>{
    const response = await fetch(`${Api_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
     }

  return (
    <div className='app'>
      <h1>Filmat</h1>
      <div className='search'>
        <input type="text" 
        placeholder='Kerko filmat' 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" 
        onClick={()=>searchMovies(searchTerm)}/>
      </div>

      {
        movies?.length > 0 
        ? (
          <div className="container">
           {movies.map((movie)=>(
            <MovieCard movie={movie}/>
           ))}
           </div>
        ) : 
        (
          <div className='empty'>
            <h2>Nuk u gjet ndonje film</h2>
          </div>
        )
      }
     
    </div>
  )
}

export default App
