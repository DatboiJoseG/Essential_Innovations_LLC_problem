import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from "./LandingPage"
import SearchBar from "./SearchBar"
import DropdownList from "./LanguageList"

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <LandingPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </>
  )
}

export default App
