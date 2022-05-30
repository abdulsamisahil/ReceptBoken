import { Link } from 'react-router-dom'

const FoodItem = ({ meal, foodClicked, isItSearch, onDelete }) => {
  return (
    <div className='card mb-2'>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className='card-img-top'
      />
      <div className='card-body'>
        <h5 className='card-title'>{meal.strMeal}</h5>
        <p id='FoodItemInList' className='card-text'>
          {meal.strInstructions}
        </p>
        <Link
          to='/food-item'
          className='btn btn-warning'
          onClick={() => {
            foodClicked(meal)
          }}
        >
          Läs mer om maten
        </Link>
        {!isItSearch && (
          <button
            type='button'
            className='btn btn-danger mx-1'
            onClick={() => {
              onDelete(meal.idMeal)
            }}
          >
            Ta bort favorit
          </button>
        )}
      </div>
    </div>
  )
}

export default FoodItem
