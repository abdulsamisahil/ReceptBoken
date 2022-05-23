import FoodItem from './FoodItem'

const FoodList = ({ meals, foodClicked }) => {
  return (
    <div className='container'>
      <div className="row">
          {meals.length === 0 ? (
            <p>No recipes found.</p>
          ) : (
            <>
              {meals.map((meal) => (
                
                <div key={meal.idMeal} className={meals.length > 1 ? 'col-sm-6' : 'col-md'}>
                  <FoodItem meal={meal} foodClicked={foodClicked} />
                </div>
              ))}
            </>
          )}
      </div>
    </div>
)}

export default FoodList
