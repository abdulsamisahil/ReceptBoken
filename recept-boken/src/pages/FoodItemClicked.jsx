import FoodItemDetails from '../components/FoodItemDetails'

const FoodItemClicked = ({ mealItem }) => {
  return (
    <div className='container'>
      <FoodItemDetails meal={mealItem} />
    </div>
  )
}

export default FoodItemClicked
