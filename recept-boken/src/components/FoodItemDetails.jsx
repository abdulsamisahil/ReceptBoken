import { Link } from 'react-router-dom'

const FoodItemDetails = ({ meal }) => {
  return (
      <div className='card mb-2'>
        {/* <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className='card-img-top'
        /> */}
        <div className='card-body'>
          <h5 className='card-title'>Meal ID: {meal}</h5>
         {/*  <h3 className='card-title'>Ingrediens 1: {meal.strIngredient1}</h3>
          <p className='card-text'>{meal.strInstructions}</p> */}
          <Link
            to='/food-item'
            className='btn btn-primary'
           /*  onClick={foodClicked} */
          >
            Kolla på recept i videon
          </Link>
        </div>
      </div>
    
  )
}

export default FoodItemDetails
