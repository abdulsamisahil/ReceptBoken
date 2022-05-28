import FavoriteFoodItem from './FavoriteFoodItem'

const FavoriteFoodList = ({ favoriteMeals, foodRemove, foodClicked }) => {
  const removeFavorite = (id) => {
    foodRemove(id)
  }

  return (
    <div className='container my-4'>
      <div className='d-flex flex-wrap '>
        {favoriteMeals ?
          <>
            {favoriteMeals.map((mealItem) => (
              <div
              key={mealItem.meal.idMeal}
              className={"col-lg-4 col-md-6"}
              >
                <FavoriteFoodItem
                  meal={mealItem.meal}
                  foodClicked={foodClicked}
                  removeFavorite={removeFavorite}
                />
              </div>
            ))}
          </>
          :
          <h2>Du har inte lagt till några favoritmåltider än.</h2>
        }
      </div>
    </div>
  )
}

export default FavoriteFoodList
