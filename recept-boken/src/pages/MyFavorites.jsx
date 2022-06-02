import { useState, useEffect } from 'react'
import FoodList from '../components/FoodList'

const MyFavorites = ({ setMealItem }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([])

  const onFoodClicked = (mealItem) => {
    setMealItem(mealItem)
  }

  const loadMeals = () => {
    let foodList = localStorage.getItem('favorites')
    let JsonFoodList = JSON.parse(foodList)

    return JsonFoodList
  }

  useEffect(() => {
    setFavoriteMeals(loadMeals)
  }, [])

  const onFoodRemove = (mealId) => {
    let meals = loadMeals()

    meals = meals.filter((m) => m.idMeal !== mealId)

    console.log(meals)

    localStorage.setItem('favorites', JSON.stringify(meals))
    setFavoriteMeals(meals)
  }

  return (
    <div className='container my-3'>
      <div className='div' align='center'>
        <h2>Mina Favoritrecept</h2>
      </div>
      <FoodList
        isSearch={false}
        meals={favoriteMeals}
        foodClicked={onFoodClicked}
        foodRemove={onFoodRemove}
      />
    </div>
  )
}

export default MyFavorites
