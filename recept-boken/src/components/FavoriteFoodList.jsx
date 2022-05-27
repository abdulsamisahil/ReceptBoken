import FavoriteFoodItem from './FavoriteFoodItem'

const FavoriteFoodList = ({ favoriteMeals, foodRemove, foodClicked }) => {
  const removeFavorite = (id) => {
    foodRemove(id)
  }

  return (
    <div className='container my-4'>
      <div className='d-flex flex-wrap justify-content-lg-center'>
        {
          <>
            {favoriteMeals.map((mealItem) => (
              <FavoriteFoodItem
                key={mealItem.idMeal}
                meal={mealItem.meal}
                foodClicked={foodClicked}
                removeFavorite={removeFavorite}
              />
            ))}
          </>
        }
      </div>
    </div>
  )
}

export default FavoriteFoodList