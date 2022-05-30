import React, { useState } from 'react'
import FoodItem from './FoodItem'

const FoodList = ({ meals, foodClicked, isSearch, foodRemove }) => {
  const removeFavorite = (id) => {
    foodRemove(id)
  }

  return (
    <div className='container'>
      <div className='row'>
        {
          <>
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className={meals.length > 1 ? 'col-sm-6' : 'col-md'}
              >
                <FoodItem
                  isItSearch={isSearch}
                  meal={meal}
                  foodClicked={foodClicked}
                  onDelete={removeFavorite}
                />
              </div>
            ))}
          </>
        }
      </div>
    </div>
  )
}

export default FoodList
