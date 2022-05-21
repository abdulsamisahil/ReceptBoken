import { Link } from 'react-router-dom'

const FoodItem = ({ meal, foodClicked }) => {
  return (
    <>
      <section className='p-5'>
        <div className='container'>
          <div className='row'>
            <div className='row text-center'>
              <div className='col-md'>
                <div className='card bg-light text-dark mb-2'>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className='card-img-top'
                  />
                  <div className='card-body text-center'>
                    <h5 className='card-title mb-3'>{meal.strMeal}</h5>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FoodItem
