import { Link } from 'react-router-dom'

const FoodItem = ({ meal, foodClicked }) => {
  return (
      <div className='card mb-2'>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className='card-img-top'
        />
        <div className='card-body'>
          <h5 className='card-title'>{meal.strMeal}</h5>
          <p className='card-text'>{meal.strInstructions}</p>
          <Link
            to='#tothismealdetailpageprop'
            className='btn btn-primary'
            onClick={foodClicked}
          >
            Gå till maten på detalj
          </Link>
        </div>
      </div>
    
  )
}

export default FoodItem
