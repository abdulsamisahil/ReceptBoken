import { Link } from 'react-router-dom'

const FoodItem = (props) => {
  return (
    <>
      <section className='p-5'>
        <div className='container'>
          <div className='row'>
            <div className='row text-center'>

              {


                props.meals == null ? <p>No recipes found.</p> :
                props.meals.map((meal) => {
                  return (
                    <div className='col-md'>
                      <div className='card bg-light text-dark mb-2'>
                        <img
                          src={meal.strMealThumb}
                          className='card-img-top'
                          alt={meal.strMeal}
                        />
                        <div className='card-body text-center'>
                          <h5 className='card-title mb-3'>{meal.strMeal}</h5>
                          <p className='card-text'>
                            {meal.strCategory}
                          </p>
                          <Link
                            to='#tothismealdetailpageprop'
                            className='btn btn-primary'
                          >
                            Gå till maten på detalj
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FoodItem
