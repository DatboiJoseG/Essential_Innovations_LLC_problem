import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from "./LandingPage"
import SearchBar from "./SearchBar"
import DropdownList from "./LanguageList"

function App() {


  return (
    <>
      <DropdownList />
      <LandingPage />
     
    </>
  )
}

export default App
