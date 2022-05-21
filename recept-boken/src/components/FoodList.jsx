import FoodItem from './FoodItem'

const FoodList = ({ meals, foodClicked }) => {
  return (
    <>
      {meals.length === 0 ? (
        <p className='container'>No recipes found.</p>
      ) : (
        <>
          {meals.map((meal) => (
            <FoodItem key={meal.idMeal} meal={meal} foodClicked={foodClicked} />
          ))}
        </>
      )}
    </>
  )
}

export default FoodList
