import React from 'react'
import FoodItem from './FoodItem'

const FoodList = ({ meals, foodClicked, isSearch, foodRemove }) => {
  const removeFavorite = (id) => {
    foodRemove(id)
  }

  return (
    <div className='container my-4'>
      <div className='row'>
        {meals ?
          <>
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className={meals.length > 1 ? 'col-lg-4 col-md-6' : 'col'}
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
          :
          <h2>Inga måltider hittades.</h2>
        }

      </div>
    </div>
  )
}

export default FoodList
