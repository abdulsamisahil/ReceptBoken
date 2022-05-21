import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchRecipe from './components/SearchRecipe'
import Showcase from './components/Showcase'
import React, { useState } from 'react'
import FoodList from './components/FoodList'
import { getFood } from './API/getFood'

const App = () => {
  const [meals, setMeals] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getRecipes = async () => {
    const response = await getFood(searchValue)
    setMeals(response)
    console.log('parent', searchValue)
  }

  const onFoodClicked = () => {
    alert('Food clicked')
  }

  return (
    <>
      <Router>
        {/* Bring Routes and Route that will be later used to route contact and my favorite meals pages next time */}
        <Header />
        <Showcase />
        <SearchRecipe
          value={searchValue}
          setSearch={setSearchValue}
          requestApi={getRecipes}
        />
        <FoodList meals={meals} foodClicked={onFoodClicked} />
        <Footer />
      </Router>
    </>
  )
}

export default App
