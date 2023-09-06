import React from 'react'
import Home from './Home'
import Cuisine  from "./Cuisine"
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

function Pages() {
  const location = useLocation();
  console.log("lokacija", location);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>} /> 
        <Route path="/searched/:searched" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<Recipe/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages