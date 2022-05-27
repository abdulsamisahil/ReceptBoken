import { useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteFoodItem from './FavoriteFoodItem'
import FoodList from './FoodList'



const FavoriteFoodList = ( {favoriteMeals, foodRemove, foodClicked} ) => {

    const removeFavorite = (id) => {
        foodRemove(id)
    }

    return (
        <div className='container my-4'>
            <div className='d-flex flex-wrap justify-content-lg-center'>
                {
                    <>
                        {favoriteMeals.map((mealItem) => (
                            <div
                                key={mealItem.idMeal}
                            >
                                <FavoriteFoodItem meal={mealItem.meal} foodClicked={foodClicked} removeFavorite={removeFavorite}/>
                            </div>

                        ))}
                    </>
                }
            </div>
        </div>

    )
}

export default FavoriteFoodList