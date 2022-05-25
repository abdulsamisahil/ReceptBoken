import FoodItemDetails from '../components/FoodItemDetails'

const FoodItemClicked = ({meal}) => {

    return (
        <div className="container" >
            <FoodItemDetails meal={meal}/>
        </div>
    )
}

export default FoodItemClicked