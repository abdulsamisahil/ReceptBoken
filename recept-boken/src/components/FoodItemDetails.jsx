import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const FoodItemDetails = ({ meal }) => {
  const navigate = useNavigate()

  if (!meal.hasOwnProperty('idMeal')) {
    return <div>Ingen mat hittades...</div>
  }

  const [link, vidId] = meal.strYoutube.split('=')

  let videoLink = `https://www.youtube.com/embed/${vidId}?rel=0`

  console.log(link)

  const clickHandler = () => {
    let favoriteMeals = JSON.parse(localStorage.getItem('favorites'))

    if (favoriteMeals == null) {
      favoriteMeals = []
    }

    if (!favoriteMeals.some((m) => m.meal.idMeal === meal.idMeal)) {
      favoriteMeals.push({
        meal,
      })
      localStorage.setItem('favorites', JSON.stringify(favoriteMeals))
      navigate('/my-favorites')
      toast.success('Favoriten har lagts till i listan')
      // alert(meal.strMeal + ' lades till dina favoritmåltid!')
    } else {
      toast.error('Favoriten finns redan med i listan!')
    }
  }

  return (
    <div>
      <section className='bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-center'>
        <div className='container'>
          <div className='d-sm-flex align-items-center'>
            <div>
              <h1>{meal.strMeal}</h1>
              <p className='lead my-4'>{meal.strInstructions}</p>
              <button
                onClick={clickHandler}
                className='btn btn-warning form-control p-3'
              >
                Favorit ?
              </button>
            </div>
          </div>
          <img className='card-img-top mt-3' src={meal.strMealThumb} alt='' />
        </div>
      </section>
      {/* Ingredients Table */}
      <div className='table'>
        <h3>Ingredienser</h3>
        <table className='table mt-3'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Ingrediens</th>
              <th scope='col'>Mätning/Decilitre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>{meal.strIngredient1}</td>
              <td>{meal.strMeasure1}</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>{meal.strIngredient2}</td>
              <td>{meal.strMeasure2}</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>{meal.strIngredient3}</td>
              <td>{meal.strMeasure3}</td>
            </tr>
            <tr>
              <th scope='row'>4</th>
              <td>{meal.strIngredient4}</td>
              <td>{meal.strMeasure4}</td>
            </tr>
            <tr>
              <th scope='row'>5</th>
              <td>{meal.strIngredient5}</td>
              <td>{meal.strMeasure5}</td>
            </tr>
            <tr>
              <th scope='row'>6</th>
              <td>{meal.strIngredient6}</td>
              <td>{meal.strMeasure6}</td>
            </tr>
            <tr>
              <th scope='row'>7</th>
              <td>{meal.strIngredient7}</td>
              <td>{meal.strMeasure7}</td>
            </tr>
            <tr>
              <th scope='row'>8</th>
              <td>{meal.strIngredient8}</td>
              <td>{meal.strMeasure8}</td>
            </tr>
            <tr>
              <th scope='row'>9</th>
              <td>{meal.strIngredient9}</td>
              <td>{meal.strMeasure9}</td>
            </tr>
            <tr>
              <th scope='row'>10</th>
              <td>{meal.strIngredient10}</td>
              <td>{meal.strMeasure10}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Recipe Video */}
      <h3>Titta på videon</h3>
      <div className='ratio ratio-16x9'>
        <iframe src={videoLink} title='YouTube video' allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default FoodItemDetails
