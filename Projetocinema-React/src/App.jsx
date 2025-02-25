import { useState } from 'react'
import './App.css'
import Search from './components/search.jsx'

function App() {
  const[SearchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className="pattern"/>
      
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="hero poster" />
        <h1 class="text-3xl font-bold underline">
            Find <span className='text-gradient'>Movies</span> you'll Enjoy Without the Hassle
        </h1>
        </header>

        <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
  </div>
  </main>
  )
}

export default App
