import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FoodItem from './components/FoodItem'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchRecipe from './components/SearchRecipe'
import Showcase from './components/Showcase'
import React, { useEffect, useState } from 'react';


const App = () => {
const [ meals, setMeals ] = useState([]);



  return (
    <>
      <Router>
        {/* Routes and Route will be later used to route contact and my favorite meals pages next time */}
        <Header />
        <Showcase />
        <SearchRecipe meals={meals} setMeals={setMeals} />
        <FoodItem meals={meals}/>
        <Footer />
      </Router>
    </>
  )
}

export default App
