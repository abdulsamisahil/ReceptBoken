import React, { useState } from 'react'

/* Components */
import SearchRecipe from '../components/SearchRecipe'
import Showcase from '../components/Showcase'
import FoodList from '../components/FoodList'

/* APIs */
import { getFood } from '../API/getFood'

const Home = ({ setMealItem }) => {
  const [meals, setMeals] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isSearch, setIsSearch] = useState(false)

  const getRecipes = async () => {
    const response = await getFood(searchValue)
    setMeals(response)
    setIsSearch(true)
  }

  /* In this method the user will redirected to the food item page specifically */
  const onFoodClicked = (mealItem) => {
    setMealItem(mealItem)
  }

  return (
    <>
      <Showcase />
      <SearchRecipe
        meals={meals}
        value={searchValue}
        setSearch={setSearchValue}
        requestApi={getRecipes}
      />
      <FoodList isSearch={isSearch} meals={meals} foodClicked={onFoodClicked} />
    </>
  )
}

export default Home
