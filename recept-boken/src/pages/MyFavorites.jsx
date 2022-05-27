import { useState, useEffect } from 'react'
import FavoriteFoodList from '../components/FavoriteFoodList'

const MyFavorites = ({ setMealItem }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([])

  const onFoodClicked = (mealItem) => {
    setMealItem(mealItem)
  }

  const loadMeals = () => {
    let foodList = localStorage.getItem('favorites')
    return JSON.parse(foodList)
  }

  useEffect(() => {
    setFavoriteMeals(loadMeals)
  }, [])

  const onFoodRemove = (meal) => {
    let meals = loadMeals()

    meals = meals.filter((m) => m.meal.idMeal !== meal)

    localStorage.setItem('favorites', JSON.stringify(meals))
    setFavoriteMeals(meals)
  }

  return (
    <div className='container my-3'>
      <div className='div' align='center'>
        <h2>Mina Favoritrecept</h2>
      </div>
      <FavoriteFoodList
        favoriteMeals={favoriteMeals}
        foodClicked={onFoodClicked}
        foodRemove={onFoodRemove}
      />
    </div>
  )
}

export default MyFavorites
