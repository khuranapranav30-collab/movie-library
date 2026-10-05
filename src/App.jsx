import { useState } from 'react'
import './App.css'
import Movies from './Movies.jsx'
import AddMovie from './AddMovie.jsx'

const movies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014
  },
  {
    id: 2,
    title: "John Wick",
    genre: "Action",
    year: 2014
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008
  },
  {
    id: 5,
    title: "Titanic",
    genre: "Romance",
    year: 1997
  },
  {
    id: 6,
    title: "The Conjuring",
    genre: "Horror",
    year: 2013
  }
]

function App() {

  const [find, setFind] = useState('')
  const [form, setForm] = useState({title:'', genre:'', year:''})
  const [m, setM] = useState(movies)

  const handleChange = (e) => {
    setFind(e.target.value)
  }

  let filter = m.filter((e) => {
    return e.title.toLowerCase().includes(find.toLowerCase())
  })

  const Handling = (e) =>{
    return setForm({...form, [e.target.name]: e.target.value})
  }

  const addMovie = () =>{
    const newmovie = 
      {
        id: m.length+1,
        title: form.title,
        genre: form.genre,
        year: form.year
      }
    {
      form.title ==="" && form.genre==="" && form.year===""?
      (""):
      setM([...m, newmovie])
    }
  }

  return (
    <>
      <input type='text' name='find' value={find} placeholder='search you movie'
        onChange={handleChange}
        style={{ padding: "10px", width: "40%" }} />

      {filter.length > 0 ?(
        filter.map((movie) => (
          <Movies
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            year={movie.year} />
        ))):
        <p>no movies found</p>
      }

      <div className='btn'>
        <button className='more-btn'>More</button>
        <div className='form'>
        <AddMovie form={form} Handling={Handling} addMovie={addMovie}/>
        </div>
      </div>

    </>
  )
}

export default App