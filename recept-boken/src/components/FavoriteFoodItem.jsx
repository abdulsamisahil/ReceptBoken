import { Link } from 'react-router-dom'

const FavoriteFoodItem = ({ meal, foodClicked, removeFavorite }) => {
  return (
    <div className='card mb-2' style={{ width: 22 + 'rem' }}>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className='card-img-top img-thumbnail rounded'
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

        <button
          type='button'
          className='btn btn-danger mx-1'
          onClick={() => {
            removeFavorite(meal.idMeal)
          }}
        >
          Ta bort favorit
        </button>
      </div>
    </div>
  )
}

export default FavoriteFoodItem
